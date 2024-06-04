const TelegramBot = require('node-telegram-bot-api');

const token = '7203291206:AAEKqgqzVlLtMLtKr4sTA-rcp3vEoBAb-N0';

const bot = new TelegramBot(token, { polling: true });

const webAppUrl = "https://fallout2712.github.io/TestTG/";

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (text === '/start') {
        await bot.sendMessage(chatId, 'Привет 👋 Данный проект находится в разработке 🛠 Совсем скоро ты сможешь зарабатывать очки, тапая по экрану, которые будут меняться на различные ключи от платформы Steam. Приложение не требует никаких вложений, всё что тебе нужно – заходить время от времени, приглашать друзей, тапать по экрану и открывать призы. В конце указанной даты ты сможешь обменять все очки, которые накопил, на 🔑 разной редкости. Пока что можешь попробовать альфа-версию и ждать официального релиза.', {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Играть', web_app: { url: webAppUrl } }],
                    [{ text: 'Подписаться на канал', web_app: { url: webAppUrl } }],
                    [{ text: 'Как обменять очки на 🔑 steam', web_app: { url: webAppUrl } }]
                ]
            }
        });
    }
});