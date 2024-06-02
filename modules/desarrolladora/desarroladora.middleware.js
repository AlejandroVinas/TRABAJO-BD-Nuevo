(function () {
    'use strict';

    module.exports = {
        addDesarrolladora: addDesarrolladora,
        getDesarrolladora: getDesarrolladora,
        getDesarrolladoraById: getDesarrolladoraById,
        modifyDesarrolladora: modifyDesarrolladora,
        removeDesarrolladora: removeDesarrolladora
    };

    var DesarrolladoraService = require('./desarroladora.module')().DesarrolladoraService;

    function addDesarrolladora(req, res, next) {
        DesarrolladoraService.createDesarrolladora(req.body)
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

    function getDesarrolladora(req, res, next) {
        DesarrolladoraService.fetchDesarrolladora()
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

    function getDesarrolladoraById(req, res, next) {
        DesarrolladoraService.fetchDesarrolladoraById(req.params.userId)
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

    function modifyDesarrolladora(req, res, next) {
        DesarrolladoraService.updateDesarrolladora(req.params.DesarrolladoraId, req.body)
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

    function removeDesarrolladora(req, res, next) {
        DesarrolladoraService.deleteDesarrolladora(req.params.DesarrolladoraId)
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
