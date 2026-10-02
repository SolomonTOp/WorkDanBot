# 🌍 Work Dan Tour & Travel | Customer Service Telegram Bot

Official customer service and sales handoff Telegram bot for **Work Dan Tour & Travel** and **Workdane Trading LLC** (Addis Ababa 🇪🇹 & Dubai/Sharjah 🇦🇪).

* **Bot Name**: Workdan Support (`@workdansupportBot`)
* **Sales Desk 1**: `@Workdan3`
* **Sales Desk 2**: `@YeEl1221`
* **Tech Stack**: Node.js, [grammY](https://grammy.dev), Vercel Serverless Functions

---

## ✨ Features

1. **Bilingual Support (English & Amharic)**:
   * Greetings, tour descriptions, menus, and FAQs in both **English 🇬🇧** and **Amharic 🇪🇹 (አማርኛ)**.
   * Customers can switch languages anytime with the `🌐 Change Language / ቋንቋ ይቀይሩ` button.
2. **Dual Sales Representatives**:
   * Every tour package, excursion, business setup service, and FAQ offers instant direct buttons to both sales desks (`@Workdan3` and `@YeEl1221`).
   * Inquiry messages are automatically pre-filled in the customer's chosen language.
3. **Tour & Travel Services**:
   * **Dubai All-in-One Holiday Package** (Flight + Visa + Hotel + Safari + City Tour + Concert)
   * **Desert Safari** (Standard 80 AED, Premium 120 AED, Private Car 400 AED)
   * **Dubai City Tour** (Sharing 80 AED, Private Car 450 AED)
   * **Marina Cruise Dinner** & **Airport Shuttles**
   * **Flight Booking & SOTO Tickets** (Departure from other countries)
4. **UAE Business Consultancy (Workdane Trading LLC)**:
   * Mainland vs. Free Zone setups
   * Investor & Employment Visas, Emirates ID
   * Commercial Trade Licensing & Bank Account opening
5. **Multi-Location Office Directory**:
   * Addis Ababa (Megenagna Wach Bldg)
   * Dubai (Deira Alrigga Business Center)
   * Sharjah (Sharjah Business Center)
6. **Zero Idle Sleep / 100% Free**:
   * Built specifically for Vercel Serverless Webhooks. Responds in ~200ms with zero server lag.

---

## 🚀 Easy Deployment to Vercel (No Git/Node Install Required)

### Step 1: Create a GitHub Repository
1. Go to [github.com](https://github.com/) and create a new **Private** repository (e.g., `workdan-travel-bot`).
2. Click the link that says **"uploading an existing file"**.
3. Drag and drop all files from this folder (`workDanBot`) into GitHub:
   * `api/`
   * `src/`
   * `package.json`
   * `vercel.json`
   * `README.md`
   *(Do NOT upload `.env` — keep your token private)*
4. Click **Commit changes**.

---

### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com/) and sign in with GitHub.
2. Click **"Add New Project"** and select your `workdan-travel-bot` repository.
3. Scroll down to **Environment Variables** and add these 3 variables:
   * `BOT_TOKEN`: `8868311873:AAFoFhDw2IWbOwLXc65Ao2LL5scMv0_eBiM`
   * `SALES_TG_USERNAME_1`: `Workdan3`
   * `SALES_TG_USERNAME_2`: `YeEl1221`
4. Click **Deploy**. Vercel will build and assign you a URL (e.g., `https://workdan-travel-bot.vercel.app`).

---

### Step 3: Register Telegram Webhook (One-Time)
Once Vercel gives you your domain, open this link in your web browser:

```text
https://api.telegram.org/bot8868311873:AAFoFhDw2IWbOwLXc65Ao2LL5scMv0_eBiM/setWebhook?url=https://<YOUR_VERCEL_DOMAIN>/api/bot
```
*(Replace `<YOUR_VERCEL_DOMAIN>` with your actual Vercel domain, e.g. `workdan-travel-bot.vercel.app`)*

Telegram will respond with:
```json
{
  "ok": true,
  "result": true,
  "description": "Webhook was set"
}
```

That's it! Your bot is live 24/7 on [@workdansupportBot](https://t.me/workdansupportBot)!
