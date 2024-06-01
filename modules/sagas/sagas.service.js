(function () {
    'use strict';

    module.exports = {
        createSagas: createSagas,
        fetchSagas: fetchSagas,
        fetchSagasById: fetchSagasById,
        updateSagas: updateSagas,
        deleteSagas: deleteSagas
    };

    var SagasModel = require('./sagas.module')().SagasModel;

    function createSagas(sagas) {
        return SagasModel.create(sagas);
    }

    function fetchSagas() {
        return SagasModel.find({})
            .exec();
    }

    function fetchSagasById(sagasId) {
        return SagasModel.findById(sagasId)
            .exec();
    }

    function updateSagas(sagasId, sagas) {
        return SagasModel
            .findByIdAndUpdate(sagasId, sagas, { new: true })
            .exec();
    }

    function deleteSagas(sagasId) {
        return SagasModel
            .findByIdAndRemove(sagasId)
            .exec();
    }
})();
