(function () {
    'use strict';
    
    module.exports = {
        createGeneros: createGeneros,
        fetchGeneros: fetchGeneros,
        fetchGenerosById: fetchGenerosById,
        updateGeneros: updateGeneros,
        deleteGeneros: deleteGeneros
    };

    var GenerosModel = require('./generos.module')().GenerosModel;
    function createGeneros(generos) {
        return GenerosModel.create(generos);
    }

    function fetchGeneros() {
        return GenerosModel.find({})
            .exec();
    }

    function fetchGenerosById(generosId) {
        return GenerosModel.findById(generosId)
            .exec();
    }

    function updateGeneros(generosId, user) {
        return GenerosModel
            .findByIdAndUpdate(generosId, user, {new: true})
            .exec();
    }

    function deleteGeneros(generoId) {
        return GenerosModel
            .findByIdAndRemove(generoId)
            .exec();
    }
})();
