(function () {
    'use strict';

    module.exports = {
        addEditorialsmesa: addEditorialsmesa,
        getEditorialsmesa: getEditorialsmesa,
        getEditorialsmesaById: getEditorialsmesaById,
        modifyEditorialsmesa: modifyEditorialsmesa,
        removeEditorialsmesa: removeEditorialsmesa
    };
   
    var EditorialsmesaService = require('./editorialsmesa.module')().EditorialsmesaService;

    function addEditorialsmesa(req, res, next) {
        EditorialsmesaService.createUser(req.body)
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

    function getEditorialsmesa(req, res, next) {

        EditorialsmesaService.fetchEditorialsmesa()
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

    function getEditorialsmesaById(req, res, next) {

        EditorialsmesaService.fetchEditorialsmesaById(req.params.userId)
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

function modifyEditorialsmesa(req, res, next) {
        EditorialsmesaService.updateEditorialsmesa(req.params.editorialsmesaId, req.body)
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

    function removeEditorialsmesa(req, res, next) {

        UserService.deleteEditorialsmesa(req.params.editorialsmesaId)
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
