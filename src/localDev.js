import "dotenv/config";
import { createBot } from "./bot.js";

const token = process.env.BOT_TOKEN;

if (!token) {
  console.error("❌ ERROR: BOT_TOKEN is not defined in your .env file.");
  console.error("Please copy .env.example to .env and fill in your Telegram Bot Token.");
  process.exit(1);
}

const bot = createBot(token);

console.log("🚀 Starting Dan World Travel Bot in local polling mode...");
bot.start({
  onStart: (botInfo) => {
    console.log(`✅ Bot @${botInfo.username} is successfully running!`);
    console.log(`👉 Open Telegram and send /start to test.`);
  }
});
