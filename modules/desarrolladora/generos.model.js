(function () {
    var mongoose = require('mongoose');  
    
    const url = "mongodb://localhost:27017/tienda";
    
    mongoose.connect(url, { useNewUrlParser: true });
    
    var Schema = mongoose.Schema;     
     
    var DesarrolladoraSchema = new Schema({
         ID: Number,
         Genero: String
    });

    module.exports = mongoose.model('Desarrolladora', DesarrolladoraSchema);
})();
