(function () {
    'use strict';

    var express = require('express');
    var router = express.Router();

    var StockconduccionMiddleware = require('./stockconduccion.module')().StockconduccionMiddleware;

    router.post('/',
        StockconduccionMiddleware.addStockconduccion,
        function (req, res) {
            res.status(201).json(req.response);
        });

    router.get('/',
        StockconduccionMiddleware.getStockconduccion,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.get('/:userId',
        StockconduccionMiddleware.getStockconduccionById,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.put('/:stockconduccionId',
        StockconduccionMiddleware.modifyStockconduccion,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.delete('/:stockconduccionId',
        StockconduccionMiddleware.removeStockconduccion,
        function (req, res) {
            res.status(200).json(req.response);
        });

    module.exports = router;

})();
