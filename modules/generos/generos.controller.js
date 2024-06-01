(function () {
    'use strict';

    var express = require('express');
    var router = express.Router();

    var GenerosMiddleware = require('./generos.module')().GenerosMiddleware;

    router.post('/',
        GenerosMiddleware.addGeneros,
        function (req, res) {
            res.status(201).json(req.response);
            
        });

    router.get('/',
        GenerosMiddleware.getGeneros,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.get('/:userId',
        GenerosMiddleware.getGenerosById,
        function (req, res) {
            res.status(200).json(req.response);
        });

router.put('/:GenerosId',
        GenerosMiddleware.modifyGeneros,
        function (req, res) {
            res.status(200).json(req.response);
        });
    router.delete('/:GenerosId',
        GenerosMiddleware.removeGeneros,
        function (req, res) {
            res.status(200).json(req.response);
        });

    module.exports = router;

})();
