(function () {
    var mongoose = require('mongoose');  
    
    const url = "mongodb://localhost:27017/tienda";
    
    mongoose.connect(url, { useNewUrlParser: true });
    
    var Schema = mongoose.Schema;     
     
    var MiembrosSchema = new Schema({
        id:{type:Number},
        nombre:{type:String},
        apellido:{type:String},
        correo:{type:String},
        telefono:{type:String},
        direccion:{type:String}
    });

    module.exports = mongoose.model('miembros', MiembrosSchema);
})();