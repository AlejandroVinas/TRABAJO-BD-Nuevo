(function () {
    var mongoose = require('mongoose');  
    
    const url = "mongodb://localhost:27017/tienda";
    
    mongoose.connect(url, { useNewUrlParser: true });
    
    var Schema = mongoose.Schema;     
     
    var StocksmesaSchema = new Schema({
         ID: Number,
         Nombre: String,
		 Unidades: Number,
		 Genero: String,
		 Editorial: String,
		 Precio: String

    });

    module.exports = mongoose.model('stocksmesa', StocksmesaSchema);
})();