(function () {
    'use strict';

    module.exports = {
        addGenerosmesa: addGenerosmesa,
        getGenerosmesa: getGenerosmesa,
        getGenerosmesaById: getGenerosmesaById,
        modifyGenerosmesa: modifyGenerosmesa,
        removeGenerosmesa: removeGenerosmesa
    };
   
    var GenerosmesaService = require('./generosmesa.module')().GenerosmesaService;

    function addGenerosmesa(req, res, next) {
        GenerosmesaService.createUser(req.body)
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

    function getGenerosmesa(req, res, next) {

        GenerosmesaService.fetchGenerosmesa()
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

    function getGenerosmesaById(req, res, next) {

        GenerosmesaService.fetchGenerosmesaById(req.params.userId)
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

function modifyGenerosmesa(req, res, next) {
        GenerosmesaService.updateGenerosmesa(req.params.generosmesaId, req.body)
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

    function removeGenerosmesa(req, res, next) {

        UserService.deleteGenerosmesa(req.params.generosmesaId)
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
