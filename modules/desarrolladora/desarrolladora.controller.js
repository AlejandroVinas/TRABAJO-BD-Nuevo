(function () {
    'use strict';

    var express = require('express');
    var router = express.Router();

    var DesarrolladoraMiddleware = require('./desarrolladora.module')().DesarrolladoraMiddleware;

    router.post('/',
        DesarrolladoraMiddleware.addDesarrolladora,
        function (req, res) {
            res.status(201).json(req.response);
        });

    router.get('/',
        DesarrolladoraMiddleware.getDesarrolladora,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.get('/:userId',
        DesarrolladoraMiddleware.getDesarrolladoraById,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.put('/:DesarrolladoraId',
        DesarrolladoraMiddleware.modifyDesarrolladora,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.delete('/:DesarrolladoraId',
        DesarrolladoraMiddleware.removeDesarrolladora,
        function (req, res) {
            res.status(200).json(req.response);
        });

    module.exports = router;

})();
