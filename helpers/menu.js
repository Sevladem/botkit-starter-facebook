
module.exports = menu;

function menu(bot, message) {
  const menuItems = require('./menuItems')(bot, message);
  const shopEngine = require('./shopEngine')(bot, message);

  return {
    mainMenu: menuItems.mainMenu,
    getStartedPayload: menuItems.mainMenu,
    mainMenuPayload: menuItems.mainMenu,
    productCatalogPayload: shopEngine.productСarousel,

    myPurchasesPayload: menuItems.stubMenu,
    shopPayload: shopEngine.productСarousel,
    favoritesPayload: menuItems.stubMenu,
    toInvateFriendPayload: menuItems.stubMenu,

    nextPayload: menuItems.stubMenu,
    view_more_product: menuItems.stubMenu,

  };

}
