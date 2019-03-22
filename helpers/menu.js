
module.exports = menu;

function menu(bot, message) {
  const menuItems = require('./menuItems')(bot, message);
  const shopEngine = require('./shopEngine')(bot, message);

  return {
    mainMenu: menuItems.mainMenu,
    getStartedPayload: menuItems.mainMenu,
    mainMenuPayload: menuItems.mainMenu,
    productCatalogPayload: shopEngine.categoryСarousel,

    myPurchasesPayload: menuItems.stubMenu,
    shopPayload: shopEngine.categoryСarousel,
    favoritesPayload: menuItems.stubMenu,
    toInvateFriendPayload: menuItems.stubMenu,

    previousCategoryPayload: shopEngine.categoryСarousel,
    nextCategoryPayload: shopEngine.categoryСarousel,

    previousProductPayload: shopEngine.productСarousel,
    nextProductPayload: shopEngine.productСarousel,

    viewCategory: shopEngine.productСarousel,
    viewProduct: menuItems.stubMenu,

  };

}
