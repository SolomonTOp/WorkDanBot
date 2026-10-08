import { Bot, InlineKeyboard } from "grammy";
import {
  I18N,
  TOUR_PACKAGES,
  FAQS,
  SERVICES_CATALOG
} from "./toursData.js";

export function createBot(token) {
  const bot = new Bot(token);

  // ─── Helpers ───────────────────────────────────────────

  const SALES_TEAM = [
    { username: "Workdan3",  name: "Solomon"  },
    { username: "workdan4",  name: "Selam"    },
    { username: "wdtravel4", name: "Robel"    },
    { username: "workdan19", name: "Elshaday" }
  ];

  const SPECIALIZED_CONTACTS = {
    entertainment: { username: "sol_aldan",      name: "Solomon"    },
    tourism:       { username: "AL_DAN_TOURISM", name: "Daniel CEO" },
    business:      { phone: "971509064877",       name: "Daniel CEO" }
  };

  const ENTERTAINMENT_SVCS = new Set(["transport_cars"]);
  const TOURISM_SVCS        = new Set(["tour_packages"]);
  const BUSINESS_SVCS       = new Set(["business_consultancy"]);

  const getSalesUrl = (username, customText) =>
    `https://t.me/${username}?text=${encodeURIComponent(customText)}`;

  const addSalesButtons = (keyboard, customText, lang = "en", serviceId = null) => {
    if (serviceId && ENTERTAINMENT_SVCS.has(serviceId)) {
      const s = SPECIALIZED_CONTACTS.entertainment;
      keyboard.row().url(`💬 ${s.name} (@${s.username})`, getSalesUrl(s.username, customText));
      keyboard.row()
        .url(`💬 ${SALES_TEAM[0].name}`, getSalesUrl(SALES_TEAM[0].username, customText))
        .url(`💬 ${SALES_TEAM[1].name}`, getSalesUrl(SALES_TEAM[1].username, customText));
      return keyboard;
    }

    if (serviceId && TOURISM_SVCS.has(serviceId)) {
      const s = SPECIALIZED_CONTACTS.tourism;
      keyboard.row().url(`💬 ${s.name} (@${s.username})`, getSalesUrl(s.username, customText));
      keyboard.row()
        .url(`💬 ${SALES_TEAM[0].name}`, getSalesUrl(SALES_TEAM[0].username, customText))
        .url(`💬 ${SALES_TEAM[1].name}`, getSalesUrl(SALES_TEAM[1].username, customText));
      return keyboard;
    }

    if (serviceId && BUSINESS_SVCS.has(serviceId)) {
      const s = SPECIALIZED_CONTACTS.business;
      keyboard.row().url(
        `💬 ${s.name} (WhatsApp)`,
        `https://wa.me/${s.phone}?text=${encodeURIComponent(customText)}`
      );
      keyboard.row()
        .url(`💬 ${SALES_TEAM[0].name}`, getSalesUrl(SALES_TEAM[0].username, customText))
        .url(`💬 ${SALES_TEAM[1].name}`, getSalesUrl(SALES_TEAM[1].username, customText));
      return keyboard;
    }

    // Default: all 4 main reps in 2 rows of 2
    keyboard.row()
      .url(`💬 ${SALES_TEAM[0].name} (@${SALES_TEAM[0].username})`, getSalesUrl(SALES_TEAM[0].username, customText))
      .url(`💬 ${SALES_TEAM[1].name} (@${SALES_TEAM[1].username})`, getSalesUrl(SALES_TEAM[1].username, customText));
    keyboard.row()
      .url(`💬 ${SALES_TEAM[2].name} (@${SALES_TEAM[2].username})`, getSalesUrl(SALES_TEAM[2].username, customText))
      .url(`💬 ${SALES_TEAM[3].name} (@${SALES_TEAM[3].username})`, getSalesUrl(SALES_TEAM[3].username, customText));
    return keyboard;
  };

  // ─── UI Decorators ─────────────────────────────────────

  const LINE = "───────────────────────";
  const DOT_LINE = "· · · · · · · · · · · · · · · · · · ·";

  // Formats a string[] of requirements into a labelled bullet block
  const formatRequirements = (reqs, lang) => {
    if (!reqs || !reqs.length) return "";
    const header = lang === "am" ? "📋 *የሚያስፈልጉ ሰነዶች:*" : "📋 *Requirements:*";
    return `${header}\n${reqs.map((r) => `  • ${r}`).join("\n")}\n`;
  };

  const formatRegulations = (regs, lang) => {
    if (!regs || !regs.length) return "";
    const header = lang === "am" ? "⚠️ *ደንቦች:*" : "⚠️ *Regulations:*";
    return `${header}\n${regs.map((r) => `  • ${r}`).join("\n")}\n`;
  };

  // ─── Calendar Date-Picker Helpers ─────────────────────

  const MONTH_NAMES_EN = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];
  const MONTH_NAMES_AM = ["ጃንዩ","ፌብሩ","ማርች","ኤፕሪ","ሜይ","ጁን","ጁላይ","ኦገስ","ሴፕቴ","ኦክቶ","ኖቬም","ዲሴም"];

  // Config: which service/item needs a calendar and what date labels to show
  const CAL_CONFIGS = {
    flight_tickets: {
      0: { single: true,  l1: { en: "Departure",   am: "ማቅናት"    } },
      1: { single: false, l1: { en: "Departure",   am: "ማቅናት"    }, l2: { en: "Return",     am: "መመለሻ"  } },
      2: { single: true,  l1: { en: "Travel Date", am: "የጉዞ ቀን"  } },
      3: { single: true,  l1: { en: "New Date",    am: "አዲስ ቀን"  } }
    },
    hotel_accommodation: {
      0: { single: false, l1: { en: "Check-in",  am: "መግቢያ" }, l2: { en: "Check-out", am: "መውጫ" } },
      1: { single: false, l1: { en: "Check-in",  am: "መግቢያ" }, l2: { en: "Check-out", am: "መውጫ" } }
    }
  };

  const getCalCfg = (serviceId, secIdx, itemIdx) => {
    const svcMap = CAL_CONFIGS[serviceId];
    if (!svcMap) return null;
    return (serviceId === "hotel_accommodation" ? svcMap[secIdx] : svcMap[itemIdx]) || null;
  };

  const encodeDate = (y, m, d) =>
    `${y}${String(m).padStart(2,"0")}${String(d).padStart(2,"0")}`;
  const decodeDate = (s) =>
    ({ year: +s.slice(0,4), month: +s.slice(4,6), day: +s.slice(6,8) });
  const formatDateDisplay = (y, m, d, lang) =>
    `${lang === "am" ? MONTH_NAMES_AM[m-1] : MONTH_NAMES_EN[m-1].slice(0,3)} ${d}, ${y}`;

  // isDisabled helpers: return true when a day should NOT be selectable
  const isBeforeToday = (y, m, d) => {
    const now = new Date();
    return new Date(y, m-1, d) < new Date(now.getFullYear(), now.getMonth(), now.getDate());
  };
  const isBeforeOrEqualTo = (fy, fm, fd) =>
    (y, m, d) => new Date(y, m-1, d) <= new Date(fy, fm-1, fd);

  const buildCalendarKeyboard = ({
    year, month, lang, isDisabled,
    makeDayCallback, makePrevCallback, makeNextCallback,
    backLabel, backCb, menuLabel, menuCb
  }) => {
    const kb   = new InlineKeyboard();
    const now  = new Date();
    const atMin = year === now.getFullYear() && month === now.getMonth() + 1;

    const title = lang === "am"
      ? `${MONTH_NAMES_AM[month-1]} ${year}`
      : `${MONTH_NAMES_EN[month-1]} ${year}`;

    kb.text(atMin ? "  " : "◀", atMin ? "noop" : makePrevCallback())
      .text(title, "noop")
      .text("▶", makeNextCallback())
      .row();

    (lang === "am"
      ? ["ሰ","ማ","ረ","ሐ","አ","ቅ","እ"]
      : ["Mo","Tu","We","Th","Fr","Sa","Su"]
    ).forEach(h => kb.text(h, "noop"));
    kb.row();

    const startDow = (new Date(year, month - 1, 1).getDay() + 6) % 7;
    const daysInM  = new Date(year, month, 0).getDate();
    const cells    = [];

    for (let i = 0; i < startDow; i++) cells.push({ l: "  ", cb: "noop" });
    for (let d = 1; d <= daysInM; d++) {
      const off = isDisabled(year, month, d);
      cells.push({ l: off ? " · " : `${d}`, cb: off ? "noop" : makeDayCallback(d) });
    }
    while (cells.length % 7 !== 0) cells.push({ l: "  ", cb: "noop" });

    cells.forEach(({ l, cb }, i) => {
      kb.text(l, cb);
      if ((i + 1) % 7 === 0) kb.row();
    });

    kb.text(backLabel, backCb).text(menuLabel, menuCb);
    return kb;
  };

  // Renders the final item-detail page after dates are selected
  const renderItemWithDates = async (ctx, {
    serviceId, secIdx, itemIdx, lang, catData, sec, rawItem, itemName,
    date1Label, date1Display, date2Label, date2Display
  }) => {
    const itemReqs = typeof rawItem === "object" ? rawItem.requirements : null;
    const itemRegs = typeof rawItem === "object" ? rawItem.regulations  : null;
    const reqsBlock = (itemReqs || sec.requirements)
      ? formatRequirements(itemReqs || sec.requirements, lang) + "\n" : "";
    const regsBlock = (itemRegs || sec.regulations)
      ? formatRegulations(itemRegs || sec.regulations, lang) + "\n"  : "";

    const dateBlock = date2Display
      ? `🗓  *${date1Label}:* ${date1Display}  ·  *${date2Label}:* ${date2Display}\n\n`
      : `🗓  *${date1Label}:* ${date1Display}\n\n`;

    const inquiry = date2Display
      ? (lang === "am"
          ? `ሰላም ወርቅ ዳን! "${itemName}" (${sec.name}) — ${date1Label}: ${date1Display} / ${date2Label}: ${date2Display}`
          : `Hi Work Dan! I'd like to proceed with "${itemName}" — ${sec.name}. ${date1Label}: ${date1Display} / ${date2Label}: ${date2Display}.`)
      : (lang === "am"
          ? `ሰላም ወርቅ ዳን! "${itemName}" (${sec.name}) — ${date1Label}: ${date1Display}`
          : `Hi Work Dan! I'd like to proceed with "${itemName}" — ${sec.name}. ${date1Label}: ${date1Display}.`);

    const cta = lang === "am"
      ? "ቀጠሉ — ከዚህ ይጫኑ ወደ ሽያጭ ቡድናችን ይገናኙ"
      : "Ready to proceed — tap below to contact our sales team";

    const text = brandHeader(lang) +
      `*${catData.title}*\n${LINE}\n` +
      `📂  ${sec.name}\n\n` +
      `✅  *${itemName}*\n` +
      dateBlock + reqsBlock + regsBlock +
      `${DOT_LINE}\n\n_${cta}_\n`;

    const keyboard = new InlineKeyboard();
    addSalesButtons(keyboard, inquiry, lang, serviceId);
    keyboard
      .row().text(`◂ ${sec.name}`, `sub_${serviceId}_${secIdx}:${lang}`)
      .row()
      .text(`◂ ${catData.btnTitle}`, `svc_${serviceId}:${lang}`)
      .text(lang === "am" ? "🏠 ዋናው" : "🏠 Menu", `main_menu:${lang}`);

    await ctx.editMessageText(text, { parse_mode: "Markdown", reply_markup: keyboard });
  };

  const brandHeader = (lang) => {
    if (lang === "am") {
      return (
        `✦ *ወርቅ ዳን ቱር & ትራቬል* ✦\n` +
        `${LINE}\n`
      );
    }
    return (
      `✦ *WORK DAN TOUR & TRAVEL* ✦\n` +
      `${LINE}\n`
    );
  };

  // ─── Keyboards ─────────────────────────────────────────

  const getLanguageKeyboard = () =>
    new InlineKeyboard()
      .text("🇬🇧  English", "set_lang:en")
      .text("🇪🇹  አማርኛ", "set_lang:am");

  const getMainMenuKeyboard = (lang = "en") => {
    const t = I18N[lang] || I18N.en;
    const salesInquiry = lang === "am"
      ? "ሰላም ወርቅ ዳን! ስለ አገልግሎታችሁ መረጃ ማግኘት እፈልጋለሁ።"
      : "Hello Work Dan! I would like to inquire about your travel services.";

    const keyboard = new InlineKeyboard();

    SERVICES_CATALOG.forEach((cat, idx) => {
      const catData = cat[lang] || cat.en;
      const num = String(idx + 1).padStart(2, " ");
      keyboard.text(`${num}. ${catData.btnTitle}`, `svc_${cat.id}:${lang}`).row();
    });

    keyboard
      .text(t.btnFaqs, `menu_faqs:${lang}`)
      .row()
      .text("🌐 Language / ቋንቋ", "choose_lang");

    addSalesButtons(keyboard, salesInquiry, lang);

    return keyboard;
  };

  // ─── Security Helpers ─────────────────────────────────
  
  // Prevent Markdown injection crashes from special characters in user names
  const escapeMd = (str) => {
    if (!str) return "";
    return str.replace(/[_*[\]()~`>#+\-=|{}.!]/g, "\\$&");
  };

  // Global Error Handler so crashes don't bring down the webhook
  bot.catch(async (err) => {
    const ctx = err.ctx;
    console.error(`Error while handling update ${ctx.update.update_id}:`, err.error);
    try {
      if (ctx.callbackQuery) {
        await ctx.answerCallbackQuery({ text: "Something went wrong. Please try again." });
      }
      await ctx.reply(
        "⚠️  Something went wrong. Tap below to return to the main menu.\n" +
        "⚠️  ችግር ተፈጥሯል። ዋናውን ማውጫ ለማየት ከታች ይጫኑ።",
        { reply_markup: getLanguageKeyboard() }
      );
    } catch (_) {
      // best-effort — if reply also fails, swallow silently
    }
  });

  // ─── /start ────────────────────────────────────────────

  bot.command("start", async (ctx) => {
    const rawName = ctx.from?.first_name || "Traveler";
    const name = escapeMd(rawName);

    const text =
      `\n` +
      `      ✈️  *W O R K   D A N*  🌍\n` +
      `       _Tour & Travel Agency_\n` +
      `${LINE}\n\n` +
      `👋  *Hello, ${name}!*\n` +
      `👋  *ሰላም, ${name}!*\n\n` +
      `${DOT_LINE}\n\n` +
      `🌐  Choose your language\n` +
      `🌐  ቋንቋዎን ይምረጡ\n`;

    await ctx.reply(text, {
      parse_mode: "Markdown",
      reply_markup: getLanguageKeyboard()
    });
  });

  // ─── /help ─────────────────────────────────────────────

  bot.command("help", async (ctx) => {
    await ctx.reply(
      `${brandHeader("en")}\n🌐  Choose your language / ቋንቋዎን ይምረጡ`,
      { parse_mode: "Markdown", reply_markup: getLanguageKeyboard() }
    );
  });

  // ─── Language Selection ────────────────────────────────

  bot.callbackQuery(/^set_lang:(en|am)$/, async (ctx) => {
    await ctx.answerCallbackQuery();
    const lang = ctx.match[1];
    const t = I18N[lang];

    const menuTitle = lang === "am"
      ? "📋  ከዚህ በታች የሚፈልጉትን አገልግሎት ይምረጡ፡"
      : "📋  Select a service from the menu below:";

    const text =
      brandHeader(lang) +
      `\n` +
      `_${t.tagline}_\n\n` +
      `${menuTitle}\n`;

    await ctx.editMessageText(text, {
      parse_mode: "Markdown",
      reply_markup: getMainMenuKeyboard(lang)
    });
  });

  bot.callbackQuery("choose_lang", async (ctx) => {
    await ctx.answerCallbackQuery();
    const text =
      `\n🌐  *Change Language / ቋንቋ ይቀይሩ*\n` +
      `${LINE}\n\n` +
      `Select your preferred language\n` +
      `የሚፈልጉትን ቋንቋ ይምረጡ`;

    await ctx.editMessageText(text, {
      parse_mode: "Markdown",
      reply_markup: getLanguageKeyboard()
    });
  });

  // Absorbs clicks on disabled/empty calendar cells
  bot.callbackQuery("noop", async (ctx) => {
    await ctx.answerCallbackQuery();
  });

  // ─── Main Menu Return ─────────────────────────────────

  bot.callbackQuery(/^main_menu:(en|am)$/, async (ctx) => {
    await ctx.answerCallbackQuery();
    const lang = ctx.match[1];
    const t = I18N[lang];

    const menuTitle = lang === "am"
      ? "📋  ከዚህ በታች የሚፈልጉትን አገልግሎት ይምረጡ፡"
      : "📋  Select a service from the menu below:";

    const text =
      brandHeader(lang) +
      `\n_${t.tagline}_\n\n` +
      `${menuTitle}\n`;

    await ctx.editMessageText(text, {
      parse_mode: "Markdown",
      reply_markup: getMainMenuKeyboard(lang)
    });
  });

  // ─── Level 1: Service Area → Subsection Buttons ───────

  bot.callbackQuery(/^svc_([a-z0-9_]+):(en|am)$/, async (ctx) => {
    await ctx.answerCallbackQuery();
    const serviceId = ctx.match[1];
    const lang = ctx.match[2];

    const cat = SERVICES_CATALOG.find((c) => c.id === serviceId);
    if (!cat) {
      await ctx.editMessageText("❌ Service not found", { reply_markup: getMainMenuKeyboard(lang) });
      return;
    }

    const catData = cat[lang] || cat.en;
    const pick = lang === "am" ? "👇  ከዚህ በታች ይምረጡ" : "👇  Choose a category";

    const text =
      brandHeader(lang) +
      `${catData.icon || cat.icon}  *${catData.title}*\n\n` +
      `_${catData.tagline}_\n\n` +
      `${DOT_LINE}\n\n` +
      `${pick}\n`;

    const keyboard = new InlineKeyboard();

    catData.sections.forEach((sec, idx) => {
      keyboard.text(`📂  ${sec.name}`, `sub_${serviceId}_${idx}:${lang}`).row();
    });

    if (serviceId === "tour_packages") {
      const btn = lang === "am"
        ? "🌟 ዝርዝር የዱባይ ጉብኝት ፓኬጆች"
        : "🌟 Dubai Tour Itineraries & Rates";
      keyboard.text(btn, `menu_tours:${lang}`).row();
    }

    addSalesButtons(keyboard, catData.inquiry, lang, serviceId);
    keyboard.row().text(lang === "am" ? "🏠 ዋናው ማውጫ" : "🏠 Main Menu", `main_menu:${lang}`);

    await ctx.editMessageText(text, { parse_mode: "Markdown", reply_markup: keyboard });
  });

  // ─── Level 2: Section → Items (or Terminal Sales) ─────

  bot.callbackQuery(/^sub_([a-z0-9_]+)_(\d+):(en|am)$/, async (ctx) => {
    await ctx.answerCallbackQuery();
    const serviceId = ctx.match[1];
    const secIdx = parseInt(ctx.match[2], 10);
    const lang = ctx.match[3];

    const cat = SERVICES_CATALOG.find((c) => c.id === serviceId);
    if (!cat) {
      await ctx.editMessageText("❌ Service not found", { reply_markup: getMainMenuKeyboard(lang) });
      return;
    }

    const catData = cat[lang] || cat.en;
    const sec = catData.sections[secIdx];
    if (!sec) {
      await ctx.editMessageText("❌ Section not found", { reply_markup: getMainMenuKeyboard(lang) });
      return;
    }

    const reqsBlock = sec.requirements ? formatRequirements(sec.requirements, lang) + "\n" : "";
    const backLabel = lang === "am" ? `◂ ${catData.btnTitle}` : `◂ ${catData.btnTitle}`;
    const menuLabel = lang === "am" ? "🏠 ዋናው" : "🏠 Menu";

    // ── Terminal section: requirements + direct sales CTA ──
    if (sec.terminalSection) {
      const regsBlock = sec.regulations ? formatRegulations(sec.regulations, lang) + "\n" : "";
      const cta = lang === "am"
        ? "ለቀጠሉ ከዚህ ይጫኑ ወደ ሽያጭ ቡድናችን ይገናኙ"
        : "Tap below to contact our sales team and proceed";

      const text =
        brandHeader(lang) +
        `*${catData.title}*\n` +
        `${LINE}\n` +
        `📂  *${sec.name}*\n\n` +
        reqsBlock +
        regsBlock +
        `${DOT_LINE}\n\n` +
        `_${cta}_\n`;

      const inquiry = sec.inquiry || catData.inquiry;
      const keyboard = new InlineKeyboard();
      addSalesButtons(keyboard, inquiry, lang, serviceId);
      keyboard.row().text(backLabel, `svc_${serviceId}:${lang}`).text(menuLabel, `main_menu:${lang}`);

      await ctx.editMessageText(text, { parse_mode: "Markdown", reply_markup: keyboard });
      return;
    }

    // ── Regular section: requirements (if any) + item buttons ──
    const pick = lang === "am" ? "👇  ከዚህ ይምረጡ" : "👇  Select your option";

    const text =
      brandHeader(lang) +
      `*${catData.title}*\n` +
      `${LINE}\n` +
      `📂  *${sec.name}*\n\n` +
      reqsBlock +
      `${pick}\n`;

    const keyboard = new InlineKeyboard();

    (sec.items || []).forEach((item, itemIdx) => {
      const label = typeof item === "object" ? item.label : item;
      keyboard.text(`▸ ${label}`, `item_${serviceId}_${secIdx}_${itemIdx}:${lang}`).row();
    });

    addSalesButtons(keyboard, catData.inquiry, lang, serviceId);
    keyboard.row().text(backLabel, `svc_${serviceId}:${lang}`).text(menuLabel, `main_menu:${lang}`);

    await ctx.editMessageText(text, { parse_mode: "Markdown", reply_markup: keyboard });
  });

  // ─── Contact & Info: special item handler ────────────

  bot.callbackQuery(/^item_company_contact_0_(\d+):(en|am)$/, async (ctx) => {
    await ctx.answerCallbackQuery();
    const itemIdx = parseInt(ctx.match[1], 10);
    const lang = ctx.match[2];

    const wa1 = "971509064877";
    const wa2 = "971544855377";

    const backLabel = lang === "am" ? "◂ ግንኙነት" : "◂ Contact & Info";
    const menuLabel = lang === "am" ? "🏠 ዋናው" : "🏠 Menu";

    const keyboard = new InlineKeyboard();
    let text = "";

    if (itemIdx === 0) {
      // About Us
      text = brandHeader(lang) + (lang === "am"
        ? `🏢  *ስለ ወርቅ ዳን አስጎብኚ*\n${LINE}\n\n` +
          `ወርቅ ዳን ቱር & ትራቬል ህጋዊ የጉዞ ወኪልና የቢዝነስ አማካሪ ድርጅት ሲሆን ዋና መ/ቤቱ *አዲስ አበባ* ነው፤ ሙሉ ቅርንጫፎቹም *ዱባይ* እና *ሻርጃህ* ይገኛሉ።\n\n` +
          `✅ ዓለም አቀፍ እና ሀገር ውስጥ ቪዛ\n` +
          `✅ የበረራ ትኬቶች እና SOTO\n` +
          `✅ ሆቴሎች እና የቱር ፓኬጆች\n` +
          `✅ UAE ድርጅት ማቋቋምና ምክር\n` +
          `✅ ሰነዶች ህጋዊ ማረጋገጫ (MOFA / PCC)\n` +
          `✅ B2B ኤጀንሲ አጋርነት\n\n` +
          `_24/7 ቀጣይነት ያለው ሁለት ቋንቋ ደንበኞች አገልግሎት_\n`
        : `🏢  *About Work Dan Tour & Travel*\n${LINE}\n\n` +
          `Work Dan Tour & Travel is a fully licensed travel agency and business consultancy headquartered in *Addis Ababa*, with full branch operations in *Dubai* and *Sharjah*.\n\n` +
          `✅ International & UAE Visa Services\n` +
          `✅ Flight Tickets & SOTO\n` +
          `✅ Hotels & Tour Packages\n` +
          `✅ UAE Business Setup & Consultancy\n` +
          `✅ Document Attestation (MOFA / PCC)\n` +
          `✅ B2B Agency Partnerships\n\n` +
          `_24/7 dedicated multilingual customer service_\n`
      );
      addSalesButtons(keyboard, lang === "am"
        ? "ሰላም ወርቅ ዳን! ስለ አገልግሎታችሁ ተጨማሪ መረጃ እፈልጋለሁ።"
        : "Hi Work Dan! I'd like more information about your services.", lang);

    } else if (itemIdx === 1) {
      // Office Locations
      text = brandHeader(lang) + (lang === "am"
        ? `📍  *የቢሮ አድራሻዎች*\n${LINE}\n\n` +
          `🇪🇹  *ኢትዮጵያ (ዋና መ/ቤት)*\n  ──  መገናኛ ዋች ህንፃ፣ 2ኛ ፎቅ፣ ቢሮ B.06\n\n` +
          `🇦🇪  *ዱባይ*\n  ──  Deira Alrigga Business Center, 3rd Floor\n\n` +
          `🇦🇪  *ሻርጃህ*\n  ──  Sharjah Business Center, Ground Floor\n\n` +
          `${DOT_LINE}\n\n` +
          `📱  *ኢትዮጵያ:* \`+251 911 62 50 35\`\n` +
          `📱  \`+251 906 70 00 07\` · \`+251 906 66 55 77\` · \`+251 906 66 00 77\`\n\n` +
          `📱  *UAE:* \`+971 509 064 877\` · \`+971 544 855 377\`\n`
        : `📍  *Office Locations*\n${LINE}\n\n` +
          `🇪🇹  *Ethiopia (Head Office)*\n  ──  Megenagna Wach Building, 2nd Floor, Office B.06\n\n` +
          `🇦🇪  *Dubai*\n  ──  Deira Alrigga Business Center, 3rd Floor\n\n` +
          `🇦🇪  *Sharjah*\n  ──  Sharjah Business Center, Ground Floor\n\n` +
          `${DOT_LINE}\n\n` +
          `📱  *Ethiopia:* \`+251 911 62 50 35\`\n` +
          `📱  \`+251 906 70 00 07\` · \`+251 906 66 55 77\` · \`+251 906 66 00 77\`\n\n` +
          `📱  *UAE:* \`+971 509 064 877\` · \`+971 544 855 377\`\n`
      );
      addSalesButtons(keyboard, lang === "am"
        ? "ሰላም ወርቅ ዳን! የቢሮ አድራሻ ጥያቄ ነበረኝ።"
        : "Hi Work Dan! I have a question about your office locations.", lang);

    } else if (itemIdx === 2) {
      // WhatsApp Support
      text = brandHeader(lang) + (lang === "am"
        ? `💬  *WhatsApp ድጋፍ*\n${LINE}\n\n_ከታች ይጫኑ ወደ WhatsApp ለመሄድ_\n`
        : `💬  *WhatsApp Support*\n${LINE}\n\n_Tap below to open WhatsApp_\n`
      );
      keyboard
        .url("💬 Daniel CEO — WhatsApp +971 509 064 877", `https://wa.me/${wa1}?text=${encodeURIComponent("Hello Work Dan!")}`)
        .row()
        .url("💬 WhatsApp +971 544 855 377", `https://wa.me/${wa2}?text=${encodeURIComponent("Hello Work Dan!")}`);

    } else if (itemIdx === 3) {
      // Telegram Support
      text = brandHeader(lang) + (lang === "am"
        ? `📲  *Telegram ድጋፍ*\n${LINE}\n\n_ከታች ይጫኑ ወደ Telegram ቀጥታ ሊገናኙ ይችላሉ_\n`
        : `📲  *Telegram Support*\n${LINE}\n\n_Tap below to open Telegram chat_\n`
      );
      keyboard
        .url(`📲 Solomon (@Workdan3)`,   `https://t.me/Workdan3`)
        .url(`📲 Selam (@workdan4)`,     `https://t.me/workdan4`)
        .row()
        .url(`📲 Robel (@wdtravel4)`,    `https://t.me/wdtravel4`)
        .url(`📲 Elshaday (@workdan19)`, `https://t.me/workdan19`)
        .row()
        .url(`📲 Solomon | Entertainment (@sol_aldan)`,    `https://t.me/sol_aldan`)
        .row()
        .url(`📲 Daniel CEO | Tourism (@AL_DAN_TOURISM)`, `https://t.me/AL_DAN_TOURISM`);

    } else if (itemIdx === 4) {
      // Business Hours
      text = brandHeader(lang) + (lang === "am"
        ? `🕒  *የሥራ ሰዓቶች*\n${LINE}\n\n` +
          `🇪🇹  *ኢትዮጵያ (አዲስ አበባ)*\n` +
          `  ──  ሰኞ–ቅዳሜ: 9:00 AM – 6:00 PM (EAT)\n` +
          `  ──  ቅዳሜ: 9:00 AM – 2:00 PM\n` +
          `  ──  ቴሌፎን/ቴሌግራም ድጋፍ፡ 24/7\n\n` +
          `🇦🇪  *UAE (ዱባይ / ሻርጃህ)*\n` +
          `  ──  ሰኞ–ቅዳሜ: 9:00 AM – 7:00 PM (GST)\n` +
          `  ──  ቴሌፎን/ቴሌግራም ድጋፍ፡ 24/7\n`
        : `🕒  *Business Hours*\n${LINE}\n\n` +
          `🇪🇹  *Ethiopia (Addis Ababa)*\n` +
          `  ──  Mon–Fri: 9:00 AM – 6:00 PM (EAT)\n` +
          `  ──  Saturday: 9:00 AM – 2:00 PM\n` +
          `  ──  Phone / Telegram: 24/7\n\n` +
          `🇦🇪  *UAE (Dubai / Sharjah)*\n` +
          `  ──  Mon–Sat: 9:00 AM – 7:00 PM (GST)\n` +
          `  ──  Phone / Telegram: 24/7\n`
      );
      addSalesButtons(keyboard, lang === "am"
        ? "ሰላም ወርቅ ዳን! ቀጠሮ / ጥያቄ ነበረኝ።"
        : "Hi Work Dan! I'd like to schedule an inquiry.", lang);

    } else {
      await ctx.editMessageText("❌ Not found", { reply_markup: getMainMenuKeyboard(lang) });
      return;
    }

    keyboard
      .row()
      .text(backLabel, `svc_company_contact:${lang}`)
      .text(menuLabel, `main_menu:${lang}`);

    await ctx.editMessageText(text, { parse_mode: "Markdown", reply_markup: keyboard });
  });

  // ─── Level 3: Item Detail → Requirements + Sales ──────

  bot.callbackQuery(/^item_([a-z0-9_]+)_(\d+)_(\d+):(en|am)$/, async (ctx) => {
    await ctx.answerCallbackQuery();
    const serviceId = ctx.match[1];
    const secIdx = parseInt(ctx.match[2], 10);
    const itemIdx = parseInt(ctx.match[3], 10);
    const lang = ctx.match[4];

    const cat = SERVICES_CATALOG.find((c) => c.id === serviceId);
    if (!cat) {
      await ctx.editMessageText("❌ Not found", { reply_markup: getMainMenuKeyboard(lang) });
      return;
    }

    const catData = cat[lang] || cat.en;
    const sec = catData.sections[secIdx];
    if (!sec || !sec.items?.[itemIdx]) {
      await ctx.editMessageText("❌ Not found", { reply_markup: getMainMenuKeyboard(lang) });
      return;
    }

    // Items can be plain strings or { label, requirements?, regulations?, ageOptions? }
    const rawItem = sec.items[itemIdx];
    const itemName = typeof rawItem === "object" ? rawItem.label : rawItem;

    // If item has age options, show age selection step instead of requirements
    if (typeof rawItem === "object" && rawItem.ageOptions) {
      const agePrompt = lang === "am"
        ? "👤  ዕድሜ ምድብዎን ይምረጡ"
        : "👤  Select your age category";

      const ageText =
        brandHeader(lang) +
        `*${catData.title}*\n` +
        `${LINE}\n` +
        `📂  ${sec.name}\n\n` +
        `✅  *${itemName}*\n\n` +
        `${agePrompt}\n`;

      const ageKeyboard = new InlineKeyboard();
      rawItem.ageOptions.forEach((opt, ageIdx) => {
        ageKeyboard.text(`👤  ${opt.label}`, `uva_${serviceId}_${secIdx}_${itemIdx}_${ageIdx}:${lang}`).row();
      });
      ageKeyboard
        .row()
        .text(lang === "am" ? `◂ ${sec.name}` : `◂ ${sec.name}`, `sub_${serviceId}_${secIdx}:${lang}`)
        .text(lang === "am" ? "🏠 ዋናው" : "🏠 Menu", `main_menu:${lang}`);

      await ctx.editMessageText(ageText, { parse_mode: "Markdown", reply_markup: ageKeyboard });
      return;
    }

    // Calendar intercept: show date-picker before detail for Flight & Hotel
    const calCfg = getCalCfg(serviceId, secIdx, itemIdx);
    if (calCfg) {
      const now = new Date();
      const y = now.getFullYear();
      const m = now.getMonth() + 1;
      const label = calCfg.l1[lang] || calCfg.l1.en;
      const calText = brandHeader(lang) +
        `*${catData.title}*\n${LINE}\n` +
        `📂  ${sec.name}\n\n` +
        `✅  *${itemName}*\n\n` +
        `📅  ${lang === "am" ? `${label} ቀን ይምረጡ` : `Select ${label} date`}\n`;

      const nextY = m === 12 ? y + 1 : y;
      const nextM = m === 12 ? 1 : m + 1;
      const calKb = buildCalendarKeyboard({
        year: y, month: m, lang,
        isDisabled: isBeforeToday,
        makeDayCallback: (d) => `datesel_${serviceId}_${secIdx}_${itemIdx}_${y}_${m}_${d}:${lang}`,
        makePrevCallback: () => "noop",
        makeNextCallback: () => `datepick_${serviceId}_${secIdx}_${itemIdx}_${nextY}_${nextM}:${lang}`,
        backLabel: `◂ ${sec.name}`,
        backCb: `sub_${serviceId}_${secIdx}:${lang}`,
        menuLabel: lang === "am" ? "🏠 ዋናው" : "🏠 Menu",
        menuCb: `main_menu:${lang}`
      });
      await ctx.editMessageText(calText, { parse_mode: "Markdown", reply_markup: calKb });
      return;
    }

    // Regular item: show requirements + regulations + sales
    const itemReqs = typeof rawItem === "object" ? rawItem.requirements : null;
    const itemRegs = typeof rawItem === "object" ? rawItem.regulations : null;
    const displayReqs = itemReqs || sec.requirements || null;
    const displayRegs = itemRegs || sec.regulations || null;

    const reqsBlock = displayReqs ? formatRequirements(displayReqs, lang) + "\n" : "";
    const regsBlock = displayRegs ? formatRegulations(displayRegs, lang) + "\n" : "";

    const itemInquiry = lang === "am"
      ? `ሰላም ወርቅ ዳን! "${itemName}" (${sec.name}) አገልግሎት ዋጋና መረጃ እፈልጋለሁ።`
      : `Hi Work Dan! I'd like to proceed with "${itemName}" — ${sec.name}.`;

    const cta = lang === "am"
      ? "ቀጠሉ — ከዚህ ይጫኑ ወደ ሽያጭ ቡድናችን ይገናኙ"
      : "Ready to proceed — tap below to contact our sales team";

    const text =
      brandHeader(lang) +
      `*${catData.title}*\n` +
      `${LINE}\n` +
      `📂  ${sec.name}\n\n` +
      `✅  *${itemName}*\n\n` +
      reqsBlock +
      regsBlock +
      `${DOT_LINE}\n\n` +
      `_${cta}_\n`;

    const keyboard = new InlineKeyboard();
    addSalesButtons(keyboard, itemInquiry, lang, serviceId);

    keyboard
      .row().text(lang === "am" ? `◂ ${sec.name}` : `◂ ${sec.name}`, `sub_${serviceId}_${secIdx}:${lang}`)
      .row()
      .text(lang === "am" ? `◂ ${catData.btnTitle}` : `◂ ${catData.btnTitle}`, `svc_${serviceId}:${lang}`)
      .text(lang === "am" ? "🏠 ዋናው" : "🏠 Menu", `main_menu:${lang}`);

    await ctx.editMessageText(text, { parse_mode: "Markdown", reply_markup: keyboard });
  });

  // ─── Calendar: navigate first-date month ─────────────
  bot.callbackQuery(/^datepick_([a-z0-9_]+)_(\d+)_(\d+)_(\d{4})_(\d{1,2}):(en|am)$/, async (ctx) => {
    await ctx.answerCallbackQuery();
    const serviceId = ctx.match[1];
    const secIdx    = parseInt(ctx.match[2], 10);
    const itemIdx   = parseInt(ctx.match[3], 10);
    const year      = parseInt(ctx.match[4], 10);
    const month     = parseInt(ctx.match[5], 10);
    const lang      = ctx.match[6];

    const cat = SERVICES_CATALOG.find((c) => c.id === serviceId);
    const catData = cat?.[lang] || cat?.en;
    const sec = catData?.sections?.[secIdx];
    const rawItem = sec?.items?.[itemIdx];
    const cfg = getCalCfg(serviceId, secIdx, itemIdx);
    if (!rawItem || !cfg) {
      await ctx.editMessageText("❌ Not found", { reply_markup: getMainMenuKeyboard(lang) }); return;
    }

    const itemName = typeof rawItem === "object" ? rawItem.label : rawItem;
    const label = cfg.l1[lang] || cfg.l1.en;
    const prevY = month === 1 ? year - 1 : year;
    const prevM = month === 1 ? 12 : month - 1;
    const nextY = month === 12 ? year + 1 : year;
    const nextM = month === 12 ? 1 : month + 1;

    const calText = brandHeader(lang) +
      `*${catData.title}*\n${LINE}\n` +
      `📂  ${sec.name}\n\n` +
      `✅  *${itemName}*\n\n` +
      `📅  ${lang === "am" ? `${label} ቀን ይምረጡ` : `Select ${label} date`}\n`;

    const calKb = buildCalendarKeyboard({
      year, month, lang,
      isDisabled: isBeforeToday,
      makeDayCallback: (d) => `datesel_${serviceId}_${secIdx}_${itemIdx}_${year}_${month}_${d}:${lang}`,
      makePrevCallback: () => `datepick_${serviceId}_${secIdx}_${itemIdx}_${prevY}_${prevM}:${lang}`,
      makeNextCallback: () => `datepick_${serviceId}_${secIdx}_${itemIdx}_${nextY}_${nextM}:${lang}`,
      backLabel: `◂ ${sec.name}`,
      backCb: `sub_${serviceId}_${secIdx}:${lang}`,
      menuLabel: lang === "am" ? "🏠 ዋናው" : "🏠 Menu",
      menuCb: `main_menu:${lang}`
    });
    await ctx.editMessageText(calText, { parse_mode: "Markdown", reply_markup: calKb });
  });

  // ─── Calendar: navigate second-date month ────────────
  bot.callbackQuery(/^datepick2_([a-z0-9_]+)_(\d+)_(\d+)_(\d{8})_(\d{4})_(\d{1,2}):(en|am)$/, async (ctx) => {
    await ctx.answerCallbackQuery();
    const serviceId  = ctx.match[1];
    const secIdx     = parseInt(ctx.match[2], 10);
    const itemIdx    = parseInt(ctx.match[3], 10);
    const firstDateS = ctx.match[4];
    const year       = parseInt(ctx.match[5], 10);
    const month      = parseInt(ctx.match[6], 10);
    const lang       = ctx.match[7];

    const cat = SERVICES_CATALOG.find((c) => c.id === serviceId);
    const catData = cat?.[lang] || cat?.en;
    const sec = catData?.sections?.[secIdx];
    const rawItem = sec?.items?.[itemIdx];
    const cfg = getCalCfg(serviceId, secIdx, itemIdx);
    if (!rawItem || !cfg) {
      await ctx.editMessageText("❌ Not found", { reply_markup: getMainMenuKeyboard(lang) }); return;
    }

    const itemName = typeof rawItem === "object" ? rawItem.label : rawItem;
    const fd = decodeDate(firstDateS);
    const label1 = cfg.l1[lang] || cfg.l1.en;
    const label2 = cfg.l2[lang] || cfg.l2.en;
    const date1Display = formatDateDisplay(fd.year, fd.month, fd.day, lang);
    const prevY = month === 1 ? year - 1 : year;
    const prevM = month === 1 ? 12 : month - 1;
    const nextY = month === 12 ? year + 1 : year;
    const nextM = month === 12 ? 1 : month + 1;

    const cal2Text = brandHeader(lang) +
      `*${catData.title}*\n${LINE}\n` +
      `📂  ${sec.name}\n\n` +
      `✅  *${itemName}*\n` +
      `✅  *${label1}:* ${date1Display}\n\n` +
      `📅  ${lang === "am" ? `${label2} ቀን ይምረጡ` : `Select ${label2} date`}\n`;

    const cal2Kb = buildCalendarKeyboard({
      year, month, lang,
      isDisabled: isBeforeOrEqualTo(fd.year, fd.month, fd.day),
      makeDayCallback: (d) => `datesel2_${serviceId}_${secIdx}_${itemIdx}_${firstDateS}_${year}_${month}_${d}:${lang}`,
      makePrevCallback: () => `datepick2_${serviceId}_${secIdx}_${itemIdx}_${firstDateS}_${prevY}_${prevM}:${lang}`,
      makeNextCallback: () => `datepick2_${serviceId}_${secIdx}_${itemIdx}_${firstDateS}_${nextY}_${nextM}:${lang}`,
      backLabel: `◂ ${label1}`,
      backCb: `datepick_${serviceId}_${secIdx}_${itemIdx}_${fd.year}_${fd.month}:${lang}`,
      menuLabel: lang === "am" ? "🏠 ዋናው" : "🏠 Menu",
      menuCb: `main_menu:${lang}`
    });
    await ctx.editMessageText(cal2Text, { parse_mode: "Markdown", reply_markup: cal2Kb });
  });

  // ─── Calendar: first date selected ───────────────────
  bot.callbackQuery(/^datesel_([a-z0-9_]+)_(\d+)_(\d+)_(\d{4})_(\d{1,2})_(\d{1,2}):(en|am)$/, async (ctx) => {
    await ctx.answerCallbackQuery();
    const serviceId = ctx.match[1];
    const secIdx    = parseInt(ctx.match[2], 10);
    const itemIdx   = parseInt(ctx.match[3], 10);
    const year      = parseInt(ctx.match[4], 10);
    const month     = parseInt(ctx.match[5], 10);
    const day       = parseInt(ctx.match[6], 10);
    const lang      = ctx.match[7];

    const cat = SERVICES_CATALOG.find((c) => c.id === serviceId);
    const catData = cat?.[lang] || cat?.en;
    const sec = catData?.sections?.[secIdx];
    const rawItem = sec?.items?.[itemIdx];
    const cfg = getCalCfg(serviceId, secIdx, itemIdx);
    if (!rawItem || !cfg) {
      await ctx.editMessageText("❌ Not found", { reply_markup: getMainMenuKeyboard(lang) }); return;
    }

    const itemName     = typeof rawItem === "object" ? rawItem.label : rawItem;
    const date1Str     = encodeDate(year, month, day);
    const date1Display = formatDateDisplay(year, month, day, lang);
    const label1       = cfg.l1[lang] || cfg.l1.en;

    if (cfg.single) {
      await renderItemWithDates(ctx, {
        serviceId, secIdx, itemIdx, lang, catData, sec, rawItem, itemName,
        date1Label: label1, date1Display, date2Label: null, date2Display: null
      });
      return;
    }

    // Dual date: show second calendar
    const label2 = cfg.l2[lang] || cfg.l2.en;
    const nextY = month === 12 ? year + 1 : year;
    const nextM = month === 12 ? 1 : month + 1;

    const cal2Text = brandHeader(lang) +
      `*${catData.title}*\n${LINE}\n` +
      `📂  ${sec.name}\n\n` +
      `✅  *${itemName}*\n` +
      `✅  *${label1}:* ${date1Display}\n\n` +
      `📅  ${lang === "am" ? `${label2} ቀን ይምረጡ` : `Select ${label2} date`}\n`;

    const cal2Kb = buildCalendarKeyboard({
      year, month, lang,
      isDisabled: isBeforeOrEqualTo(year, month, day),
      makeDayCallback: (d) => `datesel2_${serviceId}_${secIdx}_${itemIdx}_${date1Str}_${year}_${month}_${d}:${lang}`,
      makePrevCallback: () => "noop",
      makeNextCallback: () => `datepick2_${serviceId}_${secIdx}_${itemIdx}_${date1Str}_${nextY}_${nextM}:${lang}`,
      backLabel: `◂ ${label1}`,
      backCb: `datepick_${serviceId}_${secIdx}_${itemIdx}_${year}_${month}:${lang}`,
      menuLabel: lang === "am" ? "🏠 ዋናው" : "🏠 Menu",
      menuCb: `main_menu:${lang}`
    });
    await ctx.editMessageText(cal2Text, { parse_mode: "Markdown", reply_markup: cal2Kb });
  });

  // ─── Calendar: second date selected ──────────────────
  bot.callbackQuery(/^datesel2_([a-z0-9_]+)_(\d+)_(\d+)_(\d{8})_(\d{4})_(\d{1,2})_(\d{1,2}):(en|am)$/, async (ctx) => {
    await ctx.answerCallbackQuery();
    const serviceId  = ctx.match[1];
    const secIdx     = parseInt(ctx.match[2], 10);
    const itemIdx    = parseInt(ctx.match[3], 10);
    const firstDateS = ctx.match[4];
    const year       = parseInt(ctx.match[5], 10);
    const month      = parseInt(ctx.match[6], 10);
    const day        = parseInt(ctx.match[7], 10);
    const lang       = ctx.match[8];

    const cat = SERVICES_CATALOG.find((c) => c.id === serviceId);
    const catData = cat?.[lang] || cat?.en;
    const sec = catData?.sections?.[secIdx];
    const rawItem = sec?.items?.[itemIdx];
    const cfg = getCalCfg(serviceId, secIdx, itemIdx);
    if (!rawItem || !cfg) {
      await ctx.editMessageText("❌ Not found", { reply_markup: getMainMenuKeyboard(lang) }); return;
    }

    const itemName     = typeof rawItem === "object" ? rawItem.label : rawItem;
    const fd           = decodeDate(firstDateS);
    const label1       = cfg.l1[lang] || cfg.l1.en;
    const label2       = cfg.l2?.[lang] || cfg.l2?.en;
    const date1Display = formatDateDisplay(fd.year, fd.month, fd.day, lang);
    const date2Display = formatDateDisplay(year, month, day, lang);

    await renderItemWithDates(ctx, {
      serviceId, secIdx, itemIdx, lang, catData, sec, rawItem, itemName,
      date1Label: label1, date1Display, date2Label: label2, date2Display
    });
  });

  // ─── Level 4: Age-Category Detail (Dubai visa deep-nav) ─
  bot.callbackQuery(/^uva_([a-z0-9_]+)_(\d+)_(\d+)_(\d+):(en|am)$/, async (ctx) => {
    await ctx.answerCallbackQuery();
    const serviceId = ctx.match[1];
    const secIdx    = parseInt(ctx.match[2], 10);
    const itemIdx   = parseInt(ctx.match[3], 10);
    const ageIdx    = parseInt(ctx.match[4], 10);
    const lang      = ctx.match[5];

    const cat     = SERVICES_CATALOG.find((c) => c.id === serviceId);
    const catData = cat?.[lang] || cat?.en;
    const sec     = catData?.sections?.[secIdx];
    const rawItem = sec?.items?.[itemIdx];
    const ageOpt  = rawItem?.ageOptions?.[ageIdx];

    if (!ageOpt) {
      await ctx.editMessageText("❌ Not found", { reply_markup: getMainMenuKeyboard(lang) });
      return;
    }

    const itemName = rawItem.label;
    const reqsBlock = ageOpt.requirements ? formatRequirements(ageOpt.requirements, lang) + "\n" : "";
    const regsBlock = ageOpt.regulations  ? formatRegulations(ageOpt.regulations,  lang) + "\n" : "";

    const ageInquiry = lang === "am"
      ? `ሰላም ወርቅ ዳን! "${itemName} — ${ageOpt.label}" ቪዛ ቦታ ለማስያዝ / ዋጋ ለማወቅ እፈልጋለሁ።`
      : `Hi Work Dan! I'd like to proceed with "${itemName} — ${ageOpt.label}".`;

    const cta = lang === "am"
      ? "ቀጠሉ — ከዚህ ይጫኑ ወደ ሽያጭ ቡድናችን ይገናኙ"
      : "Ready to proceed — tap below to contact our sales team";

    const text =
      brandHeader(lang) +
      `*${catData.title}*\n` +
      `${LINE}\n` +
      `📂  ${sec.name}\n\n` +
      `✅  *${itemName}*\n` +
      `👤  *${ageOpt.label}*\n\n` +
      reqsBlock +
      regsBlock +
      `${DOT_LINE}\n\n` +
      `_${cta}_\n`;

    const keyboard = new InlineKeyboard();
    addSalesButtons(keyboard, ageInquiry, lang, serviceId);
    keyboard
      .row()
      .text(`◂ ${itemName}`, `item_${serviceId}_${secIdx}_${itemIdx}:${lang}`)
      .row()
      .text(`◂ ${sec.name}`, `sub_${serviceId}_${secIdx}:${lang}`)
      .text(lang === "am" ? "🏠 ዋናው" : "🏠 Menu", `main_menu:${lang}`);

    await ctx.editMessageText(text, { parse_mode: "Markdown", reply_markup: keyboard });
  });

  // ─── Tour Packages Menu ───────────────────────────────

  bot.callbackQuery(/^menu_tours:(en|am)$/, async (ctx) => {
    await ctx.answerCallbackQuery();
    const lang = ctx.match[1];

    const title = lang === "am"
      ? "🌟  *ዝርዝር የዱባይ ቱር ፓኬጆች*"
      : "🌟  *Dubai Tour Packages & Itineraries*";

    const pick = lang === "am"
      ? "ዋጋና ዝርዝር ለማየት ይምረጡ"
      : "Select a package to view details & pricing";

    const text =
      brandHeader(lang) +
      `${title}\n\n` +
      `_${pick}_\n`;

    const keyboard = new InlineKeyboard();
    TOUR_PACKAGES.forEach((pkg) => {
      const pkgData = pkg[lang] || pkg.en;
      keyboard.text(pkgData.title, `tour_${pkg.id}:${lang}`).row();
    });

    const customTripMsg = lang === "am"
      ? "ሰላም ወርቅ ዳን! ልዩ የዱባይ የጉዞ እቅድ ማውጣት እፈልጋለሁ።"
      : "Hi Work Dan! I would like to request a custom Dubai itinerary.";

    addSalesButtons(keyboard, customTripMsg, lang, "tour_packages");
    keyboard.row()
      .text(lang === "am" ? "◂ ቱር ፓኬጆች" : "◂ Tour Packages", `svc_tour_packages:${lang}`)
      .text(lang === "am" ? "🏠 ዋናው" : "🏠 Menu", `main_menu:${lang}`);

    await ctx.editMessageText(text, { parse_mode: "Markdown", reply_markup: keyboard });
  });

  // ─── Single Tour Package Detail ────────────────────────

  bot.callbackQuery(/^tour_([a-z0-9_]+):(en|am)$/, async (ctx) => {
    await ctx.answerCallbackQuery();
    const tourId = ctx.match[1];
    const lang = ctx.match[2];

    const pkg = TOUR_PACKAGES.find((item) => item.id === tourId);
    if (!pkg) {
      await ctx.editMessageText("❌ Package not found", { reply_markup: getMainMenuKeyboard(lang) });
      return;
    }

    const d = pkg[lang] || pkg.en;
    const highlights = d.highlights.map((h) => `  ${h}`).join("\n");

    const lbl = lang === "am"
      ? { dur: "⏱ ቆይታ", price: "💰 ዋጋ", about: "📖 መግለጫ", inc: "🌟 የተካተቱ" }
      : { dur: "⏱ Duration", price: "💰 Rates", about: "📖 Overview", inc: "🌟 Includes" };

    const cta = lang === "am"
      ? "ቦታ ለማስያዝ ከታች ይጫኑ"
      : "Ready to book? Tap below";

    const text =
      brandHeader(lang) +
      `*${d.title}*  〔${d.tag}〕\n` +
      `${LINE}\n\n` +
      `*${lbl.dur}:*  ${d.duration}\n` +
      `*${lbl.price}:*  ${d.price}\n\n` +
      `*${lbl.about}:*\n${d.overview}\n\n` +
      `*${lbl.inc}:*\n${highlights}\n\n` +
      `${DOT_LINE}\n\n` +
      `_${cta}_\n`;

    const keyboard = new InlineKeyboard();
    addSalesButtons(keyboard, d.inquiry, lang, "tour_packages");
    keyboard
      .row()
      .text(lang === "am" ? "◂ ፓኬጆች" : "◂ Packages", `menu_tours:${lang}`)
      .text(lang === "am" ? "🏠 ዋናው" : "🏠 Menu", `main_menu:${lang}`);

    await ctx.editMessageText(text, { parse_mode: "Markdown", reply_markup: keyboard });
  });

  // ─── FAQs Menu ────────────────────────────────────────

  bot.callbackQuery(/^menu_faqs:(en|am)$/, async (ctx) => {
    await ctx.answerCallbackQuery();
    const lang = ctx.match[1];

    const title = lang === "am"
      ? "❓  *ተደጋጋሚ ጥያቄዎች*"
      : "❓  *Frequently Asked Questions*";

    const pick = lang === "am"
      ? "መልሱን ለማየት ጥያቄ ይምረጡ"
      : "Tap a question for an instant answer";

    const text =
      brandHeader(lang) +
      `${title}\n\n` +
      `_${pick}_\n`;

    const keyboard = new InlineKeyboard();
    FAQS.forEach((faq) => {
      const q = (faq[lang] || faq.en).question;
      keyboard.text(q, `faq_${faq.id}:${lang}`).row();
    });

    const faqSalesMsg = lang === "am"
      ? "ሰላም ወርቅ ዳን! ጥያቄ ነበረኝ..."
      : "Hi Work Dan! I have a question regarding your services.";

    addSalesButtons(keyboard, faqSalesMsg, lang);
    keyboard.row().text(lang === "am" ? "🏠 ዋናው ማውጫ" : "🏠 Main Menu", `main_menu:${lang}`);

    await ctx.editMessageText(text, { parse_mode: "Markdown", reply_markup: keyboard });
  });

  // ─── Single FAQ Answer ────────────────────────────────

  bot.callbackQuery(/^faq_([a-z0-9_]+):(en|am)$/, async (ctx) => {
    await ctx.answerCallbackQuery();
    const faqId = ctx.match[1];
    const lang = ctx.match[2];

    const faq = FAQS.find((f) => f.id === faqId);
    if (!faq) {
      await ctx.editMessageText("❌ Not found", { reply_markup: getMainMenuKeyboard(lang) });
      return;
    }

    const d = faq[lang] || faq.en;

    const text =
      brandHeader(lang) +
      `*${d.question}*\n` +
      `${LINE}\n\n` +
      `${d.answer}\n`;

    const inquiryMsg = lang === "am"
      ? `ሰላም! ስለ ${d.question} ተጨማሪ ማብራሪያ እፈልጋለሁ።`
      : `Hi! I need more details about: ${d.question}`;

    const keyboard = new InlineKeyboard();
    addSalesButtons(keyboard, inquiryMsg, lang);
    keyboard
      .row()
      .text(lang === "am" ? "◂ ጥያቄዎች" : "◂ FAQs", `menu_faqs:${lang}`)
      .text(lang === "am" ? "🏠 ዋናው" : "🏠 Menu", `main_menu:${lang}`);

    await ctx.editMessageText(text, { parse_mode: "Markdown", reply_markup: keyboard });
  });

  // ─── Catch-all ────────────────────────────────────────

  bot.on("message:text", async (ctx) => {
    const rawName = ctx.from?.first_name || "";
    const name = escapeMd(rawName);

    const text =
      `\n` +
      `      ✈️  *W O R K   D A N*  🌍\n` +
      `       _Tour & Travel Agency_\n` +
      `${LINE}\n\n` +
      `👋  ${name ? `*Hi ${name}!* ` : ""}Welcome!\n` +
      `👋  እንኳን ደህና መጡ!\n\n` +
      `🌐  Choose your language / ቋንቋዎን ይምረጡ`;

    await ctx.reply(text, {
      parse_mode: "Markdown",
      reply_markup: getLanguageKeyboard()
    });
  });

  return bot;
}
