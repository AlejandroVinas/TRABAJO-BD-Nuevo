(function () {
    'use strict';

    var express = require('express');
    var router = express.Router();

    var SagasMiddleware = require('./sagas.module')().SagasMiddleware;

    router.post('/',
        SagasMiddleware.addSagas,
        function (req, res) {
            res.status(201).json(req.response);
        });

    router.get('/',
        SagasMiddleware.getSagas,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.get('/:userId',
        SagasMiddleware.getSagasById,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.put('/:sagasId',
        SagasMiddleware.modifySagas,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.delete('/:sagasId',
        SagasMiddleware.removeSagas,
        function (req, res) {
            res.status(200).json(req.response);
        });

    module.exports = router;

})();
