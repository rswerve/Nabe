var Yelp = require('yelp')
var Instagram = require('instagram-node-lib')

module.exports.yelp = new Yelp({
  consumer_key: process.env.consumer_key || 'D8sO-Uz4xcb_Znhctwy0Ug',
  consumer_secret: process.env.consumer_secret || '-w7VBBbIKXdZubymi28SipZiAUg',
  token: process.env.token || 'vuI4gvfeOei_yDjjSxoAv3UmBz_PUu2m',
  token_secret: process.env. token_secret || 'uClihBlcW-42dZXYL6bIyxRFZSM'
})

Instagram.set('client_id', process.env.client_id || '7cecbb01064343e98ea2136cf2c2d644')
Instagram.set('client_secret', process.env.client_secret || '52430394bb464cc8ba544c0969c403db')
Instagram.set('access_token', process.env.access_token || '3059592243.1677ed0.8af9ea23813542a79c4b6797658d1526')
// Instagram.media.search({ lat: '48.858844300000001', lng: '2.2943506' });
// Instagram.tags.info({
//   name: 'blue',
//   complete: function(data){
//     console.log(data);
//   }
// });