(function () {
    'use strict';

    module.exports = {
        addGeneros: addGeneros,
        getGeneros: getGeneros,
        getGenerosById: getGenerosById,
        modifyGeneros: modifyGeneros,
        removeGeneros: removeGeneros
    };
   
    var GenerosService = require('./generosmesa.module')().GenerosService;

    function addGeneros(req, res, next) {
        GenerosService.createUser(req.body)
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

    function getGeneros(req, res, next) {

        GenerosService.fetchGeneros()
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

    function getGenerosById(req, res, next) {

        GenerosService.fetchGenerosById(req.params.userId)
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

function modifyGeneros(req, res, next) {
        GenerosService.updateGeneros(req.params.generosmesaId, req.body)
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

    function removeGeneros(req, res, next) {

        UserService.deleteGeneros(req.params.generosmesaId)
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
