(function () {
    'use strict';

    module.exports = {
        addStockconduccion: addStockconduccion,
        getStockconduccion: getStockconduccion,
        getStockconduccionById: getStockconduccionById,
        modifyStockconduccion: modifyStockconduccion,
        removeStockconduccion: removeStockconduccion
    };

    var StockconduccionService = require('./stockconduccion.module')().StockconduccionService;

    function addStockconduccion(req, res, next) {
        StockconduccionService.createStockconduccion(req.body)
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

    function getStockconduccion(req, res, next) {
        StockconduccionService.fetchStockconduccion()
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

    function getStockconduccionById(req, res, next) {
        StockconduccionService.fetchStockconduccionById(req.params.userId)
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

    function modifyStockconduccion(req, res, next) {
        StockconduccionService.updateStockconduccion(req.params.stockconduccionId, req.body)
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

    function removeStockconduccion(req, res, next) {
        StockconduccionService.deleteStockconduccion(req.params.stockconduccionId)
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
