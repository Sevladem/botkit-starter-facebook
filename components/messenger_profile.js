var debug = require('debug')('botkit:messenger_profile');



module.exports = function(controller) {

    debug('Configuring Facebook messenger profile...');
    controller.api.messenger_profile.greeting('Hello! I\'m a H\&H bot!');
    controller.api.messenger_profile.get_started('test_bot_app_get_started_payload');
    controller.api.messenger_profile.menu([
        {
            "locale": "default",
            "composer_input_disabled": true,
            "call_to_actions": [
                {
                    "type":"postback",
                    "title":"Main menu (t)",
                    "payload":"main_menu_payload"
                },
                {
                    "type":"postback",
                    "title":"Product catalog",
                    "payload":"product_catalog_payload"
                }
            ]
        }]);
}
