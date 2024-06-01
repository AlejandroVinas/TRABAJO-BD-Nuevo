const MongoDBUtils = require( 'mongodb' ).MongoDBUtils;
const url = "mongodb://localhost:27017";

var _db;

module.exports = {
  init: function( callback ) {
    MongoDBUtils.connect( url,  { useNewUrlParser: true }, function( err, client ) {
      _db  = client.db('tienda');
      return callback( err );
    } );
  },
  getDb: function() {
    return _db;
  }
};
