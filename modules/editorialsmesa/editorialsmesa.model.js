(function () {
    var mongoose = require('mongoose');  
    
    const url = "mongodb://localhost:27017/tienda";
    
    mongoose.connect(url, { useNewUrlParser: true });
    
    var Schema = mongoose.Schema;     
     
    var EditorialsmesaSchema = new Schema({
         iD: Number,
         nombre: String,
		 juegos_en_tienda: Number

    });

    module.exports = mongoose.model('editorialsmesa', EditorialsmesaSchema);
})();