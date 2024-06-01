(function () {
    'use strict';
    
    module.exports = {
        createEncargos: createEncargos,
        fetchEncargos: fetchEncargos,
        fetchEncargosById: fetchEncargosById,
        updateEncargos: updateEncargos,
        deleteEncargos: deleteEncargos
    };

    var EncargosModel = require('./encargos.module')().EncargosModel;
    function createEncargos(encargos) {
        return EncargosModel.create(encargos);
    }

    function fetchEncargos() {
        return EncargosModel.find({})
            .exec();
    }

    function fetchEncargosById(encargosId) {
        return EncargosModel.findById(encargosId)
            .exec();
    }

    function updateEncargos(encargosId, user) {
        return EncargosModel
            .findByIdAndUpdate(encargosId, user, {new: true})
            .exec();
    }

    function deleteEncargos(encargoId) {
        return EncargosModel
            .findByIdAndRemove(encargoId)
            .exec();
    }
})();
