(function () {
    var mongoose = require('mongoose');  
    
    const url = "mongodb://localhost:27017/tienda";
    
    mongoose.connect(url, { useNewUrlParser: true });
    
    var Schema = mongoose.Schema;     
     
    var EmpleadosSchema = new Schema({
        id: Number,
        nombre: String,
        apellido: String,
        correo: String,
        telefono: String,
        direccion: String,
        fecha_contratacion: Date,
        salario: Number,
        cargo: String

    });

    module.exports = mongoose.model('empleados', EmpleadosSchema);
})();