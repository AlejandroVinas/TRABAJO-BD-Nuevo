(function () {
    'use strict';

    var express = require('express');
    var router = express.Router();

    var StocksmesaMiddleware = require('./stocksmesa.module')().StocksmesaMiddleware;

    router.post('/',
        StocksmesaMiddleware.addStocksmesa,
        function (req, res) {
            res.status(201).json(req.response);
            
        });

    router.get('/',
        StocksmesaMiddleware.getStocksmesa,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.get('/:userId',
        StocksmesaMiddleware.getStocksmesaById,
        function (req, res) {
            res.status(200).json(req.response);
        });

router.put('/:StocksmesaId',
        StocksmesaMiddleware.modifyStocksmesa,
        function (req, res) {
            res.status(200).json(req.response);
        });
    router.delete('/:StocksmesaId',
        StocksmesaMiddleware.removeStocksmesa,
        function (req, res) {
            res.status(200).json(req.response);
        });

    module.exports = router;

})();
