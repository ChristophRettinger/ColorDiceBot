var token = '235305189:AAHqeGxe6BdMFzPwxEWg_y23BLEsfe1zxOM';

var Bot = require('node-telegram-bot-api'),
    bot = new Bot(token, { polling: true });

console.log('bot server started...');

bot.onText(/^\/hello (.+)$/, function (msg, match) {
  var name = match[1];
  bot.sendMessage(msg.chat.id, 'Hello ' + name + '!').then(function () {
    // reply sent!
  });
});

bot.onText(/^\/help$/, function (msg) {
  var name = match[1];
  bot.sendMessage(msg.chat.id, '/hello [Name]').then(function () {
    // reply sent!
  });
});