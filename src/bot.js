import { Bot, InlineKeyboard } from "grammy";
import {
  COMPANY_INFO,
  I18N,
  TOUR_PACKAGES,
  TRAVEL_SERVICES,
  BUSINESS_SERVICES,
  FAQS
} from "./toursData.js";

export function createBot(token) {
  const bot = new Bot(token);

  // Sales Telegram handles from environment variables
  const getSalesUsers = () => {
    const rep1 = (process.env.SALES_TG_USERNAME_1 || "Workdan3").replace(/^@/, "");
    const rep2 = (process.env.SALES_TG_USERNAME_2 || "YeEl1221").replace(/^@/, "");
    return [rep1, rep2];
  };

  // Helper to build direct sales link with pre-filled message
  const getSalesUrl = (username, customText) => {
    return `https://t.me/${username}?text=${encodeURIComponent(customText)}`;
  };

  // Helper to add side-by-side buttons for both sales agents
  const addSalesButtons = (keyboard, customText, lang = "en") => {
    const [rep1, rep2] = getSalesUsers();
    const prefix = lang === "am" ? "💬 አነጋግር @" : "💬 Chat @";
    keyboard.row()
      .url(`${prefix}${rep1}`, getSalesUrl(rep1, customText))
      .url(`${prefix}${rep2}`, getSalesUrl(rep2, customText));
    return keyboard;
  };

  // 1. Language Picker Keyboard
  const getLanguageKeyboard = () => {
    return new InlineKeyboard()
      .text("🇬🇧 English", "set_lang:en")
      .text("🇪🇹 አማርኛ", "set_lang:am");
  };

  // 2. Build Main Menu Keyboard based on selected language
  const getMainMenuKeyboard = (lang = "en") => {
    const t = I18N[lang] || I18N.en;
    const salesInquiry = lang === "am"
      ? "ሰላም ወርቅ ዳን! ስለ አገልግሎታችሁ መረጃ ማግኘት እፈልጋለሁ።"
      : "Hello Work Dan! I would like to inquire about your travel services.";

    const keyboard = new InlineKeyboard()
      .text(t.btnTours, `menu_tours:${lang}`)
      .row()
      .text(t.btnTravel, `menu_travel:${lang}`)
      .row()
      .text(t.btnBusiness, `menu_business:${lang}`)
      .row()
      .text(t.btnContacts, `menu_contacts:${lang}`)
      .text(t.btnFaqs, `menu_faqs:${lang}`)
      .row()
      .text(t.btnChangeLang, "choose_lang");

    // Add buttons for both sales representatives
    addSalesButtons(keyboard, salesInquiry, lang);

    return keyboard;
  };

  // 3. /start command: Bilingual Greeting & Language Selection
  bot.command("start", async (ctx) => {
    const firstName = ctx.from?.first_name || "Traveler";
    const welcomePrompt =
      `👋 *Welcome, ${firstName}!* / *እንኳን ደህና መጡ!*\n\n` +
      `*Work Dan Tour & Travel | Workdane Trading LLC*\n` +
      `_Your Gateway to Travel, Tours & UAE Business Setup ✈️🌍_\n` +
      `_ለጉዞ፣ ለቱሪዝምና ለዱባይ ቢዝነስ ፈቃድ ታማኝ አጋርዎ_\n\n` +
      `Please select your preferred language:\n` +
      `እባክዎ የሚፈልጉትን ቋንቋ ይምረጡ:`;

    await ctx.reply(welcomePrompt, {
      parse_mode: "Markdown",
      reply_markup: getLanguageKeyboard()
    });
  });

  // /help command
  bot.command("help", async (ctx) => {
    await ctx.reply(
      "Please select your language / እባክዎ ቋንቋ ይምረጡ:",
      { reply_markup: getLanguageKeyboard() }
    );
  });

  // 4. Callback: Language Selection Handlers
  bot.callbackQuery(/^set_lang:(en|am)$/, async (ctx) => {
    await ctx.answerCallbackQuery();
    const lang = ctx.match[1];
    const t = I18N[lang];

    const greetingText =
      `${t.welcomeTitle}\n\n` +
      `_${t.tagline}_\n\n` +
      `${t.welcomeBody}`;

    await ctx.editMessageText(greetingText, {
      parse_mode: "Markdown",
      reply_markup: getMainMenuKeyboard(lang)
    });
  });

  // Callback: Switch Language screen
  bot.callbackQuery("choose_lang", async (ctx) => {
    await ctx.answerCallbackQuery();
    const text =
      `🌐 *Change Language / ቋንቋ ይቀይሩ*\n\n` +
      `Please select a language / እባክዎ ቋንቋ ይምረጡ:`;

    await ctx.editMessageText(text, {
      parse_mode: "Markdown",
      reply_markup: getLanguageKeyboard()
    });
  });

  // 5. Callback: Return to Main Menu
  bot.callbackQuery(/^main_menu:(en|am)$/, async (ctx) => {
    await ctx.answerCallbackQuery();
    const lang = ctx.match[1];
    const t = I18N[lang];

    const text =
      `🏠 *${t.name}*\n\n` +
      `${t.welcomeBody}`;

    await ctx.editMessageText(text, {
      parse_mode: "Markdown",
      reply_markup: getMainMenuKeyboard(lang)
    });
  });

  // 6. Callback: Tour Packages Menu
  bot.callbackQuery(/^menu_tours:(en|am)$/, async (ctx) => {
    await ctx.answerCallbackQuery();
    const lang = ctx.match[1];
    const t = I18N[lang];

    const keyboard = new InlineKeyboard();
    TOUR_PACKAGES.forEach((pkg) => {
      const pkgData = pkg[lang] || pkg.en;
      keyboard.text(pkgData.title, `tour_${pkg.id}:${lang}`).row();
    });

    const customTripMsg = lang === "am"
      ? "ሰላም ወርቅ ዳን! ልዩ የዱባይ የጉዞ እቅድ ማውጣት እፈልጋለሁ።"
      : "Hi Work Dan! I would like to request a custom Dubai itinerary.";

    addSalesButtons(keyboard, customTripMsg, lang);

    keyboard.row().text(t.btnBackMenu, `main_menu:${lang}`);

    await ctx.editMessageText(t.toursHeader, {
      parse_mode: "Markdown",
      reply_markup: keyboard
    });
  });

  // 7. Callback: Single Tour Package Details
  bot.callbackQuery(/^tour_([a-z0-9_]+):(en|am)$/, async (ctx) => {
    await ctx.answerCallbackQuery();
    const tourId = ctx.match[1];
    const lang = ctx.match[2];
    const t = I18N[lang];

    const pkg = TOUR_PACKAGES.find((item) => item.id === tourId);
    if (!pkg) {
      await ctx.editMessageText("Package not found / አልተገኘም", {
        reply_markup: getMainMenuKeyboard(lang)
      });
      return;
    }

    const pkgData = pkg[lang] || pkg.en;
    const highlightsList = pkgData.highlights.map((h) => `• ${h}`).join("\n");

    const labels = lang === "am"
      ? { duration: "⏱ *ቆይታ / መርሃ-ግብር:*", price: "💰 *ዋጋ:*", overview: "📖 *አጠቃላይ መግለጫ:*", includes: "🌟 *የተካተቱ አገልግሎቶች:*" }
      : { duration: "⏱ *Duration / Schedule:*", price: "💰 *Rates:*", overview: "📖 *Overview:*", includes: "🌟 *Details & Inclusions:*" };

    const text =
      `*${pkgData.title}* [${pkgData.tag}]\n\n` +
      `${labels.duration} ${pkgData.duration}\n` +
      `${labels.price} ${pkgData.price}\n\n` +
      `${labels.overview}\n${pkgData.overview}\n\n` +
      `${labels.includes}\n${highlightsList}\n\n` +
      (lang === "am" ? "ቦታ ለማስያዝ ከታች ካሉት የሽያጭ አማካሪዎች አንዱን ይምረጡ፡" : "Ready to book or need custom dates? Select a sales agent below:");

    const keyboard = new InlineKeyboard();
    addSalesButtons(keyboard, pkgData.inquiry, lang);

    keyboard
      .row()
      .text(t.btnBackTours, `menu_tours:${lang}`)
      .text(t.btnBackMenu, `main_menu:${lang}`);

    await ctx.editMessageText(text, {
      parse_mode: "Markdown",
      reply_markup: keyboard
    });
  });

  // 8. Callback: Travel & Ticketing Services
  bot.callbackQuery(/^menu_travel:(en|am)$/, async (ctx) => {
    await ctx.answerCallbackQuery();
    const lang = ctx.match[1];
    const t = I18N[lang];
    const services = TRAVEL_SERVICES[lang] || TRAVEL_SERVICES.en;

    let text = t.travelHeader;
    services.forEach((s) => {
      text += `*${s.title}*\n${s.desc}\n\n`;
    });
    text += t.travelFooter;

    const inquiryMsg = lang === "am"
      ? "ሰላም ወርቅ ዳን! የበረራ ትኬት / SOTO ትኬት / ቪዛ አገልግሎት እፈልጋለሁ።"
      : "Hi Work Dan! I need assistance with Airline Tickets / SOTO / Visa Documentation.";

    const keyboard = new InlineKeyboard();
    addSalesButtons(keyboard, inquiryMsg, lang);
    keyboard.row().text(t.btnBackMenu, `main_menu:${lang}`);

    await ctx.editMessageText(text, {
      parse_mode: "Markdown",
      reply_markup: keyboard
    });
  });

  // 9. Callback: Business Setup (Workdane Trading LLC)
  bot.callbackQuery(/^menu_business:(en|am)$/, async (ctx) => {
    await ctx.answerCallbackQuery();
    const lang = ctx.match[1];
    const t = I18N[lang];
    const services = BUSINESS_SERVICES[lang] || BUSINESS_SERVICES.en;

    let text = t.bizHeader;
    services.forEach((b) => {
      text += `*${b.title}*\n${b.desc}\n\n`;
    });
    text += t.bizFooter;

    const inquiryMsg = lang === "am"
      ? "ሰላም! በዱባይ የንግድ ፈቃድ ማውጣት / ኢንቨስተር ቪዛ ማግኘት እፈልጋለሁ።"
      : "Hello! I am inquiring about UAE Business Setup / Trade License / Investor Visa.";

    const keyboard = new InlineKeyboard();
    addSalesButtons(keyboard, inquiryMsg, lang);
    keyboard.row().text(t.btnBackMenu, `main_menu:${lang}`);

    await ctx.editMessageText(text, {
      parse_mode: "Markdown",
      reply_markup: keyboard
    });
  });

  // 10. Callback: Contacts & Office Locations
  bot.callbackQuery(/^menu_contacts:(en|am)$/, async (ctx) => {
    await ctx.answerCallbackQuery();
    const lang = ctx.match[1];
    const t = I18N[lang];
    const officeList = COMPANY_INFO.offices[lang] || COMPANY_INFO.offices.en;
    const [rep1, rep2] = getSalesUsers();

    let text = t.contactsHeader;
    officeList.forEach((o) => {
      text += `*${o.country}*\n`;
      text += `🏢 ${o.address}\n`;
      if (o.support) text += `🕒 ${o.support}\n`;
      text += `\n`;
    });

    text += `✈️ *Telegram Sales Desks:*\n`;
    text += `• \`@${rep1}\`\n`;
    text += `• \`@${rep2}\`\n\n`;

    text += `${t.ethiopiaPhones}\n`;
    COMPANY_INFO.phones.ethiopia.forEach((p) => {
      text += `• \`${p}\`\n`;
    });

    text += `\n${t.uaePhones}\n`;
    COMPANY_INFO.phones.uae.forEach((p) => {
      text += `• \`${p}\`\n`;
    });

    text += `\n📧 *Email:* ${COMPANY_INFO.email}\n`;
    text += `🌐 *Website:* ${COMPANY_INFO.website}\n`;
    text += `🎵 *TikTok:* \`${COMPANY_INFO.tiktok}\`\n`;

    const chatMsg = lang === "am"
      ? "ሰላም ወርቅ ዳን! ከቴሌግራም ቦት ነው የምደውለው/የምጽፈው።"
      : "Hi Work Dan! I am reaching out from your Telegram Bot.";

    const keyboard = new InlineKeyboard();
    addSalesButtons(keyboard, chatMsg, lang);
    keyboard.row().text(t.btnBackMenu, `main_menu:${lang}`);

    await ctx.editMessageText(text, {
      parse_mode: "Markdown",
      reply_markup: keyboard
    });
  });

  // 11. Callback: FAQs Menu
  bot.callbackQuery(/^menu_faqs:(en|am)$/, async (ctx) => {
    await ctx.answerCallbackQuery();
    const lang = ctx.match[1];
    const t = I18N[lang];

    const keyboard = new InlineKeyboard();
    FAQS.forEach((faq) => {
      const q = (faq[lang] || faq.en).question;
      keyboard.text(q, `faq_${faq.id}:${lang}`).row();
    });

    const faqSalesMsg = lang === "am"
      ? "ሰላም ወርቅ ዳን! ጥያቄ ነበረኝ..."
      : "Hi Work Dan! I have a question regarding your services.";

    addSalesButtons(keyboard, faqSalesMsg, lang);
    keyboard.row().text(t.btnBackMenu, `main_menu:${lang}`);

    await ctx.editMessageText(t.faqsHeader, {
      parse_mode: "Markdown",
      reply_markup: keyboard
    });
  });

  // 12. Callback: Single FAQ Answer
  bot.callbackQuery(/^faq_([a-z0-9_]+):(en|am)$/, async (ctx) => {
    await ctx.answerCallbackQuery();
    const faqId = ctx.match[1];
    const lang = ctx.match[2];
    const t = I18N[lang];

    const faq = FAQS.find((f) => f.id === faqId);
    if (!faq) {
      await ctx.editMessageText("Not found / አልተገኘም", {
        reply_markup: getMainMenuKeyboard(lang)
      });
      return;
    }

    const faqData = faq[lang] || faq.en;
    const text = `*${faqData.question}*\n\n${faqData.answer}`;

    const inquiryMsg = lang === "am"
      ? `ሰላም! ስለ ${faqData.question} ተጨማሪ ማብራሪያ እፈልጋለሁ።`
      : `Hi! I need more details about: ${faqData.question}`;

    const keyboard = new InlineKeyboard();
    addSalesButtons(keyboard, inquiryMsg, lang);
    keyboard
      .row()
      .text(t.btnBackFaqs, `menu_faqs:${lang}`)
      .text(t.btnBackMenu, `main_menu:${lang}`);

    await ctx.editMessageText(text, {
      parse_mode: "Markdown",
      reply_markup: keyboard
    });
  });

  // 13. Catch-all for regular text messages
  bot.on("message:text", async (ctx) => {
    const text =
      `👋 Welcome to *Work Dan Tour & Travel*!\n` +
      `እንኳን ወደ *ወርቅ ዳን አስጎብኚና የጉዞ ወኪል* በደህና መጡ!\n\n` +
      `Please choose your language / እባክዎ ቋንቋ ይምረጡ:`;

    await ctx.reply(text, {
      parse_mode: "Markdown",
      reply_markup: getLanguageKeyboard()
    });
  });

  return bot;
}
