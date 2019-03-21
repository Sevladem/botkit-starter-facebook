module.exports = menuItems;

function menuItems (bot, message) {
  var vMainMenu = {
    text: 'Main menu',
    quick_replies: [
      {
        content_type: 'text',
        title: 'My purchases',
        payload: 'myPurchasesPayload'
      },
      {
        content_type: 'text',
        title: 'Shop',
        payload: 'shopPayload'
      },
      {
        content_type: 'text',
        title: 'Favorites',
        payload: 'favoritesPayload'
      },
      {
        content_type: 'text',
        title: 'To invaite a friend',
        payload: 'toInvateFriendPayload'
      }
    ]
  };

  var vStubMenu = {
    text: 'Sorry, this page is being constructed.'
  };

  return {
    stubMenu,
    mainMenu
  };

  function stubMenu () {
    bot.startConversation(message,function(err,convo) {
      convo.sayFirst(vStubMenu);
      convo.say(vMainMenu);
    });
  }

  function mainMenu () {
    bot.reply(message,vMainMenu);
  }

}
