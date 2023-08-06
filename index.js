const TelegramBot = require("node-telegram-bot-api");

const token = "6026489808:AAGZp3mA2giiHW2WfvdcCOzsRqKBJpGraO4";
const webAppUrl = "https://dashing-donut-1d5354.netlify.app";

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
            [
              {
                text: "Заповніть форму",
                web_app: { url: webAppUrl + "/form" },
              },
            ],
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

  if (msg?.web_app_data?.data) {
    try {
      const data = JSON.parse(msg?.web_app_data?.data);

      await bot.sendMessage(chatId, "Дякуємо за зворотній звязок");
      await bot.sendMessage(chatId, "Ваша країна:" + data?.country);
      await bot.sendMessage(chatId, "Ваша вулиця:" + data?.street);

      setTimeout(async () => {
        await bot.sendMessage(
          chatId,
          "Усю інформацію Ви отримаєту в цбому чаті"
        );
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  }
});
