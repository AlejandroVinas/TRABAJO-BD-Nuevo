(function () {
    'use strict';

    module.exports = {
        addStockIndies: addStockIndies,
        getStockIndies: getStockIndies,
        getStockIndiesById: getStockIndiesById,
        modifyStockIndies: modifyStockIndies,
        removeStockIndies: removeStockIndies
    };

    var StockIndiesService = require('./stockIndies.module')().StockIndiesService;

    function addStockIndies(req, res, next) {
        StockIndiesService.createStockIndies(req.body)
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

    function getStockIndies(req, res, next) {
        StockIndiesService.fetchStockIndies()
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

    function getStockIndiesById(req, res, next) {
        StockIndiesService.fetchStockIndiesById(req.params.userId)
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

    function modifyStockIndies(req, res, next) {
        StockIndiesService.updateStockIndies(req.params.StockIndiesId, req.body)
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

    function removeStockIndies(req, res, next) {
        StockIndiesService.deleteStockIndies(req.params.StockIndiesId)
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
