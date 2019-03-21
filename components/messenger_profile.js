var debug = require('debug')('botkit:messenger_profile');


module.exports = function start(controller) {
  debug('Configuring Facebook messenger profile...');
  controller.api.messenger_profile.greeting('Hello! I\'m a H\&H bot!');
  controller.api.messenger_profile.get_started('getStartedPayload');
  controller.api.messenger_profile.menu([
    {
      locale: 'default',
      composer_input_disabled: false,
      call_to_actions: [
        {
          type: 'postback',
          title: 'Main menu',
          payload: 'mainMenuPayload'
        },
        {
          type: 'postback',
          title: 'Product catalog',
          payload: 'productCatalogPayload'
        }
      ]
    }]);
  controller.api.messenger_profile.domain_whitelist(
    ['https://api.bestbuy.com','https://img.bbystatic.com','https://bots.svdsrvc.tech']
  )
};
