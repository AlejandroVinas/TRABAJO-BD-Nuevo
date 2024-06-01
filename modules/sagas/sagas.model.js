(function () {
    var mongoose = require('mongoose');

    const url = "mongodb://localhost:27017/tienda";

    mongoose.connect(url, { useNewUrlParser: true });

    var Schema = mongoose.Schema;

    var SagasSchema = new Schema({
        ID: Number,
        Saga: String
    });

    module.exports = mongoose.model('sagas', SagasSchema);
})();
