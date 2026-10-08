import { webhookCallback } from "grammy";
import { createBot } from "../src/bot.js";

const token = process.env.BOT_TOKEN;

let bot = null;
let handleUpdate = null;

if (token) {
  bot = createBot(token);
  handleUpdate = webhookCallback(bot, "http");
}

export default async function handler(req, res) {
  // Simple health check when visiting the URL in a browser
  if (req.method === "GET") {
    return res.status(200).json({
      status: "online",
      message: "Dan World Travel & Tours Telegram Bot is active and running on Vercel!",
      timestamp: new Date().toISOString()
    });
  }

  // Telegram webhook POST handler
  if (req.method === "POST") {
    if (!handleUpdate) {
      console.error("BOT_TOKEN is missing in environment variables.");
      return res.status(500).json({ error: "BOT_TOKEN not configured" });
    }

    // Security Verification: Ensure the request comes from Telegram
    const secretToken = process.env.WEBHOOK_SECRET;
    if (secretToken) {
      const headerToken = req.headers["x-telegram-bot-api-secret-token"];
      if (headerToken !== secretToken) {
        console.warn("Unauthorized request attempt rejected.");
        return res.status(401).send("Unauthorized");
      }
    }

    try {
      return await handleUpdate(req, res);
    } catch (err) {
      console.error("Error processing update:", err);
      return res.status(500).send("Internal Server Error");
    }
  }

  return res.status(405).send("Method Not Allowed");
}
