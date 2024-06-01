(function () {
    'use strict';
    
    module.exports = {
        createEditorialsmesa: createEditorialsmesa,
        fetchEditorialsmesa: fetchEditorialsmesa,
        fetchEditorialsmesaById: fetchEditorialsmesaById,
        updateEditorialsmesa: updateEditorialsmesa,
        deleteEditorialsmesa: deleteEditorialsmesa
    };

    var EditorialsmesaModel = require('./editorialsmesa.module')().EditorialsmesaModel;
    function createEditorialsmesa(editorialsmesa) {
        return EditorialsmesaModel.create(editorialsmesa);
    }

    function fetchEditorialsmesa() {
        return EditorialsmesaModel.find({})
            .exec();
    }

    function fetchEditorialsmesaById(editorialsmesaId) {
        return EditorialsmesaModel.findById(editorialsmesaId)
            .exec();
    }

    function updateEditorialsmesa(editorialsmesaId, user) {
        return EditorialsmesaModel
            .findByIdAndUpdate(editorialsmesaId, user, {new: true})
            .exec();
    }

    function deleteEditorialsmesa(generoId) {
        return EditorialsmesaModel
            .findByIdAndRemove(generoId)
            .exec();
    }
})();
