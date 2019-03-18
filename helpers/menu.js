
var stubMenu = {
  name: 'stub_menu',
  text: 'Sorry, this page is being constructed.'
};

var mainMenu = {
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

// var productCatalogMenu = {
//   text: 'Shop'
// };

module.exports = {
  mainMenu,

  getStartedPayload: mainMenu,
  mainMenuPayload: mainMenu,
  productCatalogPayload: stubMenu,

  myPurchasesPayload: stubMenu,
  shopPayload: stubMenu,
  favoritesPayload: stubMenu,
  toInvateFriendPayload: stubMenu
};
