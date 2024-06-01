(function () {
    'use strict';

    var express = require('express');
    var router = express.Router();

    var StockIndiesMiddleware = require('./stockIndies.module')().StockIndiesMiddleware;

    router.post('/',
        StockIndiesMiddleware.addStockIndies,
        function (req, res) {
            res.status(201).json(req.response);
        });

    router.get('/',
        StockIndiesMiddleware.getStockIndies,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.get('/:userId',
        StockIndiesMiddleware.getStockIndiesById,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.put('/:StockIndiesId',
        StockIndiesMiddleware.modifyStockIndies,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.delete('/:StockIndiesId',
        StockIndiesMiddleware.removeStockIndies,
        function (req, res) {
            res.status(200).json(req.response);
        });

    module.exports = router;

})();
