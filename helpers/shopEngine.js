var bby = require('bestbuy')(process.env.bbyAPIKey);

module.exports = shopProduct;

function shopProduct(bot, message) {
  return {
    productСarousel
  };

  function productСarousel () {

    bby.products('(categoryPath.id=pcmcat232900050000)', {show: 'sku,name,salePrice,image,addToCartUrl', pageSize: 3}, function(err, data) {
      if (err) {
        console.warn(err);
      } else if (data.total === 0) {
        console.log('No products found');
      } else {
        console.log('Found %d products. First match "%s" is $%d', data.total, data.products[0].name, data.products[0].salePrice);

        var elemantsData = data.products.map(function(item) {
          return {
            title: item.name,
            subtitle: item.sku,
            image_url: item.image,
            buttons: [
              {
                type:'postback',
                title:'View more',
                payload:'view_more_product'
              }
            ]
          }
        });
        
        products = {
          attachment: {
            type: 'template',
            payload: {
              template_type: 'generic',
              elements: elemantsData
            }
          }
        }

        bot.reply(message,products)
      };
    });
  }

}
