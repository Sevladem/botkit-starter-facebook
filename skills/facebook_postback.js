module.exports = function(controller) {

  controller.on('facebook_postback', function(bot, message) {

    if (message.payload == "test_bot_app_get_started_payload") {

      var main_menu = {
        "text": "Main menu",
        "quick_replies":[
          {
            "content_type":"text",
            "title":"My purchases",
            "payload":"my_purchases_payload"
          },
          {
            "content_type":"text",
            "title":"Shop",
            "payload":"shop_payload"
          },
          {
            "content_type":"text",
            "title":"Favorites",
            "payload":"favorites_payload"
          },
          {
            "content_type":"text",
            "title":"To invaite a friend",
            "payload":"to_invate_friend_payload"
          }
        ]
      }
      bot.reply(message, main_menu);
    } else if (message.payload == "main_menu_payload") {
      //вызываем главное меню
      bot.reply(message, "Главное меню");
    } else if (message.payload == "product_catalog_payload") {
      //Заглушка
      bot.reply(message, "Каталог продуктов");
    } else {
      bot.reply(message, message.raw_message.postback.title);
    }

  });

};
