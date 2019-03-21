
module.exports = function(controller) {

  controller.on('facebook_postback,message_received', function(bot, message) {
    var menu = require('../helpers/menu.js')(bot, message)
    if (message.quick_reply) {
      answer = menu[message.quick_reply.payload];
    } else {
      answer = menu[message.payload];
    };

    if (answer) {
      if (typeof(answer) === 'function'){
        answer = answer();
      } else {
        bot.reply(message, "Бяда-бяда");
      }
    } else {
      // Тут должен быть обработчик несуществующей команды
      bot.reply(message, 'Sorry, nonexistent command');
    }
  });

};
