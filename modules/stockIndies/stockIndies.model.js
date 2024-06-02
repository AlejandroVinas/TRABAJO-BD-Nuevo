(function () {
    var mongoose = require('mongoose');  
    
    const url = "mongodb://localhost:27017/tienda";
    
    mongoose.connect(url, { useNewUrlParser: true });
    
    var Schema = mongoose.Schema;     
     
    var StockIndiesSchema = new Schema({
        ID: Number,
        Nombre: String,
        stock: Number,
        Genero: String,
        Desarrollador: { type: Schema.Types.ObjectId, ref: 'Desarrolladora' },
        Precio: String
    });

    module.exports = mongoose.model('stockindies', StockIndiesSchema);
})();
