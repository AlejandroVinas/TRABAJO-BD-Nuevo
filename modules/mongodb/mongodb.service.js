(function () {
    'use strict';
    var mongoose = require('mongoose');
    module.exports = {
       MongoDBUtil
    };      
    
    function MongoDBUtil() {
        mongoose.connect('mongodb://localhost:27017/tienda', { useNewUrlParser: true, useUnifiedTopology: true });
        const db = mongoose.connection;
        return db;
    }

})();