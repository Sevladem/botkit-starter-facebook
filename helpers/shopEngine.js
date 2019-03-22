var bby = require('bestbuy')(process.env.bbyAPIKey);
var logger = require('../utils/logger.js');

module.exports = shopEngine;

function shopEngine(bot, message) {
  return {
    categoryСarousel,
    productСarousel
  };

  function categoryСarousel (page) {
    page = page || 1;
    bby.categories('(id=abcat*)', {show: 'id,name', pageSize: 10, page: page}, function(err, data) {
      if (err) {
        logger.error(err);
      } else if (data.total === 0) {
        bot.reply('Categories not found!');
      } else {

        var quick_replies = [];
        if (page !== 1) {
          quick_replies.push({
            content_type: 'text',
            title: '<-Previous',
            payload: 'previousCategoryPayload_' + (page-1)
          });
        }

        if (page !== data.totalPages) {
          quick_replies.push({
            content_type: 'text',
            title: 'Next ->',
            payload: 'nextCategoryPayload_' + (page+1)
          });
        }

        var elemantsData = data.categories.map(function(item) {
          return {
            title: item.name,
            subtitle: item.name,
            buttons: [
              {
                type:'postback',
                title:'Choose',
                payload:'viewCategory_1_' + item.id
              }
            ]
          }
        });

        categories = {
          attachment: {
            type: 'template',
            payload: {
              template_type: 'generic',
              elements: elemantsData
            },
          },
          quick_replies: quick_replies
        }

        bot.startConversation(message, function(err, convo) {
          convo.sayFirst('Choose category, please.');
          convo.say(categories);
        });
      };
    });
  }

  function productСarousel (page, categoryID) {
    page = page || 1;
    bby.products('(categoryPath.id='+categoryID+')', {show: 'sku,name,salePrice,image,addToCartUrl', pageSize: 10, page:page}, function(err, data) {
      if (err) {
        console.warn(err);
      } else if (data.total === 0) {
        bot.reply('This category, products not found!');
      } else {
        console.log('Found %d products. First match "%s" is $%d', data.total, data.products[0].name, data.products[0].salePrice);

        quick_replies = [];
        if (page !== 1) {
          quick_replies.push({
            content_type: 'text',
            title: '<-Previous',
            payload: ['previousProductPayload',String((page-1)),categoryID].join('_')
          });
        }

        if (page !== data.totalPages) {
          quick_replies.push({
            content_type: 'text',
            title: 'Next ->',
            payload: ['nextProductPayload',String((page+1)),categoryID].join('_')
          });
        }

        var elemantsData = data.products.map(function(item) {
          return {
            title: item.name,
            subtitle: item.sku,
            image_url: item.image,
            buttons: [
              {
                type:'postback',
                title:'View',
                payload:'viewProduct_'+item.sku
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
          },
          quick_replies: quick_replies
        }

        bot.startConversation(message, function(err, convo) {
          convo.sayFirst(products);
        });

      };
    });
  }


}
