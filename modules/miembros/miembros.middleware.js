(function () {
    'use strict';

    module.exports = {
        addMiembros: addMiembros,
        getMiembros: getMiembros,
        getMiembrosById: getMiembrosById,
        modifyMiembros: modifyMiembros,
        removeMiembros: removeMiembros
    };
   
    var MiembrosService = require('./miembros.module')().MiembrosService;

    function addMiembros(req, res, next) {
        MiembrosService.createUser(req.body)
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

    function getMiembros(req, res, next) {

        MiembrosService.fetchMiembros()
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

    function getMiembrosById(req, res, next) {

        MiembrosService.fetchMiembrosById(req.params.userId)
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

function modifyMiembros(req, res, next) {
        MiembrosService.updateMiembros(req.params.miembrosId, req.body)
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

    function removeMiembros(req, res, next) {

        UserService.deleteMiembros(req.params.miembrosId)
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
