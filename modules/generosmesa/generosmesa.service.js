(function () {
    'use strict';
    
    module.exports = {
        createGenerosmesa: createGenerosmesa,
        fetchGenerosmesa: fetchGenerosmesa,
        fetchGenerosmesaById: fetchGenerosmesaById,
        updateGenerosmesa: updateGenerosmesa,
        deleteGenerosmesa: deleteGenerosmesa
    };

    var GenerosmesaModel = require('./generosmesa.module')().GenerosmesaModel;
    function createGenerosmesa(generos) {
        return GenerosmesaModel.create(generos);
    }

    function fetchGenerosmesa() {
        return GenerosmesaModel.find({})
            .exec();
    }

    function fetchGenerosmesaById(generosId) {
        return GenerosmesaModel.findById(generosId)
            .exec();
    }

    function updateGenerosmesa(generosId, user) {
        return GenerosmesaModel
            .findByIdAndUpdate(generosId, user, {new: true})
            .exec();
    }

    function deleteGenerosmesa(generoId) {
        return GenerosmesaModel
            .findByIdAndRemove(generoId)
            .exec();
    }
})();
