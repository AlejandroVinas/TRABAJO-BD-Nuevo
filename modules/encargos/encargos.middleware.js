(function () {
    'use strict';

    module.exports = {
        addEncargos: addEncargos,
        getEncargos: getEncargos,
        getEncargosById: getEncargosById,
        modifyEncargos: modifyEncargos,
        removeEncargos: removeEncargos
    };
   
    var EncargosService = require('./encargos.module')().EncargosService;

    function addEncargos(req, res, next) {
        EncargosService.createUser(req.body)
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

    function getEncargos(req, res, next) {

        EncargosService.fetchEncargos()
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

    function getEncargosById(req, res, next) {

        EncargosService.fetchEncargosById(req.params.userId)
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

function modifyEncargos(req, res, next) {
        EncargosService.updateEncargos(req.params.encargosId, req.body)
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

    function removeEncargos(req, res, next) {

        UserService.deleteEncargos(req.params.encargosId)
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
