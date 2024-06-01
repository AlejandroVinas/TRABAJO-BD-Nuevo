(function () {
    var mongoose = require('mongoose');  
    
    const url = "mongodb://localhost:27017/tienda";
    
    mongoose.connect(url, { useNewUrlParser: true });
    
    var Schema = mongoose.Schema;     
     
    var EncargosSchema = new Schema({
        id:{type:Number},
        id_cliente:{type:Number},
        id_producto:{type:Number},
        cantidad:{type:Number},
        total_venta:{type:mongoose.Types.Decimal128},
        fecha_venta:{type: Date, default: Date.now}
    });

    module.exports = mongoose.model('encargos', EncargosSchema);
})();