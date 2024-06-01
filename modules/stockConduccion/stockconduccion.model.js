(function () {
    var mongoose = require('mongoose');

    const url = "mongodb://localhost:27017/tienda";

    mongoose.connect(url, { useNewUrlParser: true });

    var Schema = mongoose.Schema;

    var StockconduccionSchema = new Schema({
        ID: Number,
        Conduccion: String
    });

    module.exports = mongoose.model('stockconduccion', StockconduccionSchema);
})();
