(function () {
    'use strict';

    module.exports = {
        addSagas: addSagas,
        getSagas: getSagas,
        getSagasById: getSagasById,
        modifySagas: modifySagas,
        removeSagas: removeSagas
    };

    var SagasService = require('./sagas.module')().SagasService;

    function addSagas(req, res, next) {
        SagasService.createSagas(req.body)
            .then(success)
            .catch(failure);

        function success(data) {
            req.response = data;
            next();
        }

        function failure(error) {
            next(error);
        }
    }

    function getSagas(req, res, next) {
        SagasService.fetchSagas()
            .then(success)
            .catch(failure);

        function success(data) {
            req.response = data;
            next();
        }

        function failure(err) {
            next(err);
        }
    }

    function getSagasById(req, res, next) {
        SagasService.fetchSagasById(req.params.userId)
            .then(success)
            .catch(failure);

        function success(data) {
            req.response = data;
            next();
        }

        function failure(err) {
            next(err);
        }
    }

    function modifySagas(req, res, next) {
        SagasService.updateSagas(req.params.sagasId, req.body)
            .then(success)
            .catch(error);

        function success(data) {
            req.response = data;
            next();
        }

        function error(err) {
            next(err);
        }
    }

    function removeSagas(req, res, next) {
        SagasService.deleteSagas(req.params.sagasId)
            .then(success)
            .catch(error);

        function success(data) {
            req.response = data;
            next();
        }

        function error(err) {
            next(err);
        }
    }
})();
