(function () {
    'use strict';
    
    module.exports = {
        createMiembros: createMiembros,
        fetchMiembros: fetchMiembros,
        fetchMiembrosById: fetchMiembrosById,
        updateMiembros: updateMiembros,
        deleteMiembros: deleteMiembros
    };

    var MiembrosModel = require('./miembros.module')().MiembrosModel;
    function createMiembros(miembros) {
        return MiembrosModel.create(miembros);
    }

    function fetchMiembros() {
        return MiembrosModel.find({})
            .exec();
    }

    function fetchMiembrosById(miembrosId) {
        return MiembrosModel.findById(miembrosId)
            .exec();
    }

    function updateMiembros(miembrosId, user) {
        return MiembrosModel
            .findByIdAndUpdate(miembrosId, user, {new: true})
            .exec();
    }

    function deleteMiembros(miembroId) {
        return MiembrosModel
            .findByIdAndRemove(miembroId)
            .exec();
    }
})();
