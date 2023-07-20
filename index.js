const TelegramBot = require("node-telegram-bot-api");

const token = "6026489808:AAGZp3mA2giiHW2WfvdcCOzsRqKBJpGraO4";
const webAppUrl =
  "https://64b9972f18f2a03b390ffbb7--dashing-donut-1d5354.netlify.app";

const bot = new TelegramBot(token, { polling: true });

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === "/start") {
    await bot.sendMessage(
      chatId,
      "Привіт,нижче з'явиться кнопка для заповнення форми",
      {
        reply_markup: {
          keyboard: [
            [{ text: "Заповніть форму", web_app: { url: webAppUrl } }],
          ],
        },
      }
    );

    await bot.sendMessage(
      chatId,
      "Привіт,нижче з'явиться кнопка для заповнення форми",
      {
        reply_markup: {
          inline_keyboard: [
            [{ text: "Зробіть замовлення", web_app: { url: webAppUrl } }],
          ],
        },
      }
    );
  }
});
