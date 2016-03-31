var db = require('../config');
var crypto = require('crypto');

// var Link = db.Model.extend({
//   tableName: 'urls',
//   hasTimestamps: true,
//   defaults: {
//     visits: 0
//   },
//   initialize: function() {
//     this.on('creating', function(model, attrs, options) {
//       var shasum = crypto.createHash('sha1');
//       shasum.update(model.get('url'));
//       model.set('code', shasum.digest('hex').slice(0, 5));
//     });
//   }
// });

var linkSchema = db.Schema({
  id: Number, 
  url: String, 
  baseUrl: String, 
  code: String, 
  title: String, 
  visits: Number, 
  timestamp: {type: Date, default: Date.now()}
});

linkSchema.methods.makeCode = function() {
  console.log('*************************** making code *******************************');
  var shasum = crypto.createHash('sha1');
  shasum.update(this.url);
  this.code = shasum.digest('hex').slice(0, 5);
  return this;
};

var Link = db.model('Link', linkSchema);



module.exports = Link;
