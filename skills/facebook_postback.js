
var menu = require('../libs/menu.js')

module.exports = function(controller) {

  controller.on('facebook_postback', function(bot, message) {

    if (menu[message.payload]) {
      bot.reply(message, menu[message.payload]);
    } else {
      // Тут должен быть обработчик несуществующей команды
      bot.reply(message, message.raw_message.postback.title);

  });

  controller.on('message_received', function(bot, message) {

      if (message.quick_reply) {
        if (menu[message.quick_reply.payload]){
          bot.reply(message, menu[message.quick_reply.payload]);
          //Возможно неправильно, но пока так.
          //Возврат на главное меню
          if (menu[message.quick_reply.payload].name == 'stub_menu'){
            bot.reply(message, menu.main_menu);
          }
        } else {
          //Тут должен быть обработчик несуществующей команды
         bot.reply(message, message.text);
       }
      }

  });

};
