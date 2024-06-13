const TelegramBot = require('node-telegram-bot-api');

const token = '7203291206:AAEKqgqzVlLtMLtKr4sTA-rcp3vEoBAb-N0';

const bot = new TelegramBot(token, { polling: true });

const webAppUrl = "https://fallout2712.github.io/TestTG/";
const linkToParty = "https://t.me/keydrop_test/";
const linkToMessageParty = "https://t.me/keydrop_test/12";

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (text === '/start') {
        await bot.sendMessage(chatId, 'Привет 👋 Данный проект находится в разработке 🛠 Совсем скоро ты сможешь зарабатывать очки, тапая по экрану, которые будут меняться на различные ключи от платформы Steam. Приложение не требует никаких вложений, всё что тебе нужно – заходить время от времени, приглашать друзей, тапать по экрану и открывать призы. В конце указанной даты ты сможешь обменять все очки, которые накопил, на 🔑 разной редкости. Пока что можешь попробовать альфа-версию и ждать официального релиза.', {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Играть', web_app: { url: webAppUrl } }],
                    [{ text: 'Подписаться на канал', web_app: { url: linkToParty } }],
                    [{ text: 'Как обменять очки на 🔑 steam', web_app: { url: linkToMessageParty } }]
                ]
            }
        });
    }
});

bot.on('web_app_data', async (msg) => {
    try {
        const data = JSON.parse(msg.web_app_data.data); // Изменено на msg.web_app_data.data
        const feedback = data.feedback ?? 'empty message';
        await bot.sendMessage(msg.chat.id, `Ваше сообщение: ${feedback}`); // Используем msg.chat.id
    } catch (error) {
        await bot.sendMessage(msg.chat.id, 'Произошла ошибка при обработке данных.');
        console.error(error);
    }
});

