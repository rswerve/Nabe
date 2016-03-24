var Yelp = require('yelp')

module.exports.yelp = new Yelp({
  consumer_key: process.env.consumer_key || 'D8sO-Uz4xcb_Znhctwy0Ug',
  consumer_secret: process.env.consumer_secret || '-w7VBBbIKXdZubymi28SipZiAUg',
  token: process.env.token || 'vuI4gvfeOei_yDjjSxoAv3UmBz_PUu2m',
  token_secret: process.env. token_secret || 'uClihBlcW-42dZXYL6bIyxRFZSM'
})