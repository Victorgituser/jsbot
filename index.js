const TelegramBot = require('node-telegram-bot-api');


const bot = new TelegramBot('8558161082:AAF0IL6Ul75zhhvPrjhd1jD7WHrmNOPBnaQ', { polling: true }); // Вместо слова TOKEN, укажите реальный токен вашего бота, который выдал вам BotFather 


bot.onText(/привет/i, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Привет!');
});

bot.onText(/пока/i, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'пока!');
});

bot.onText(/время/i, (msg) => {
    const chatId = msg.chat.id;
    const time = new Date();
    bot.sendMessage(chatId, time);
})

console.log('Бот запущен!');

