(function () {
    var mongoose = require('mongoose');

    const url = "mongodb://localhost:27017/tienda";

    mongoose.connect(url, { useNewUrlParser: true });

    var Schema = mongoose.Schema;

    var EditorialSchema = new Schema({
        ID: Number,
        Editorial: String
    });

    module.exports = mongoose.model('editorial', EditorialSchema);
})();
