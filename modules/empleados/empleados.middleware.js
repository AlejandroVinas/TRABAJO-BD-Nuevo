(function () {
    'use strict';

    module.exports = {
        addEmpleados: addEmpleados,
        getEmpleados: getEmpleados,
        getEmpleadosById: getEmpleadosById,
        modifyEmpleados: modifyEmpleados,
        removeEmpleados: removeEmpleados
    };
   
    var EmpleadosService = require('./empleados.module')().EmpleadosService;

    function addEmpleados(req, res, next) {
        EmpleadosService.createUser(req.body)
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

    function getEmpleados(req, res, next) {

        EmpleadosService.fetchEmpleados()
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

    function getEmpleadosById(req, res, next) {

        EmpleadosService.fetchEmpleadosById(req.params.userId)
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

function modifyEmpleados(req, res, next) {
        EmpleadosService.updateEmpleados(req.params.empleadosId, req.body)
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

    function removeEmpleados(req, res, next) {

        UserService.deleteEmpleados(req.params.empleadosId)
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
