(function () {
    'use strict';
    
    module.exports = {
        createEmpleados: createEmpleados,
        fetchEmpleados: fetchEmpleados,
        fetchEmpleadosById: fetchEmpleadosById,
        updateEmpleados: updateEmpleados,
        deleteEmpleados: deleteEmpleados
    };

    var EmpleadosModel = require('./empleados.module')().EmpleadosModel;
    function createEmpleados(empleados) {
        return EmpleadosModel.create(empleados);
    }

    function fetchEmpleados() {
        return EmpleadosModel.find({})
            .exec();
    }

    function fetchEmpleadosById(empleadosId) {
        return EmpleadosModel.findById(empleadosId)
            .exec();
    }

    function updateEmpleados(empleadosId, user) {
        return EmpleadosModel
            .findByIdAndUpdate(empleadosId, user, {new: true})
            .exec();
    }

    function deleteEmpleados(empleadoId) {
        return EmpleadosModel
            .findByIdAndRemove(empleadoId)
            .exec();
    }
})();
