var MongoDBUtil = require( 'mongodb' );
const url = "mongodb://localhost:27017/tienda";
var _db;

module.exports = {
  init: function( callback ) {
    MongoDBUtil.connect( url,  { useNewUrlParser: true }, function( err, client ) {
      _db  = client.db('tienda');
      return _db;
    } );
  },
  getDb: function() {
    return _db;
  }
};

