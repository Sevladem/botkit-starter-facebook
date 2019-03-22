
module.exports = function(controller) {

  controller.on('facebook_postback,message_received', function(bot, message) {
    var menu = require('../helpers/menu.js')(bot, message)
    if (message.quick_reply) {
      payload = message.quick_reply.payload;
    } else {
      payload = message.payload;
    };

    // Первый элемент - наименование пейлоада
    // второй элемент всегда страница
    // третий элемент допаргумент
    arrPayload = payload.split('_', 3);

    menuItemKey = arrPayload[0];
    page = arrPayload[1] || 1;
    arg = arrPayload[2];
    answer = menu[menuItemKey];

    if (answer) {
      if (typeof(answer) === 'function'){
        answer = answer(page, arg);
      } else {
        bot.reply(message, "Бяда-бяда");
      }
    } else {
      // Тут должен быть обработчик несуществующей команды
      bot.reply(message, 'Sorry, nonexistent command');
    }
  });

};
