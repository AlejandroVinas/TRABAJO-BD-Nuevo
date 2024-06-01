(function () {
    'use strict';

    module.exports = {
        addStocksmesa: addStocksmesa,
        getStocksmesa: getStocksmesa,
        getStocksmesaById: getStocksmesaById,
        modifyStocksmesa: modifyStocksmesa,
        removeStocksmesa: removeStocksmesa
    };
   
    var StocksmesaService = require('./stocksmesa.module')().StocksmesaService;

    function addStocksmesa(req, res, next) {
        StocksmesaService.createUser(req.body)
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

    function getStocksmesa(req, res, next) {

        StocksmesaService.fetchStocksmesa()
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

    function getStocksmesaById(req, res, next) {

        StocksmesaService.fetchStocksmesaById(req.params.userId)
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

function modifyStocksmesa(req, res, next) {
        StocksmesaService.updateStocksmesa(req.params.stocksmesaId, req.body)
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

    function removeStocksmesa(req, res, next) {

        UserService.deleteStocksmesa(req.params.stocksmesaId)
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
