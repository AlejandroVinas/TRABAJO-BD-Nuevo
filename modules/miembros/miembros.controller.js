(function () {
    'use strict';

    var express = require('express');
    var router = express.Router();

    var MiembrosMiddleware = require('./miembros.module')().MiembrosMiddleware;

    router.post('/',
        MiembrosMiddleware.addMiembros,
        function (req, res) {
            res.status(201).json(req.response);
            
        });

    router.get('/',
        MiembrosMiddleware.getMiembros,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.get('/:userId',
        MiembrosMiddleware.getMiembrosById,
        function (req, res) {
            res.status(200).json(req.response);
        });

router.put('/:MiembrosId',
        MiembrosMiddleware.modifyMiembros,
        function (req, res) {
            res.status(200).json(req.response);
        });
    router.delete('/:MiembrosId',
        MiembrosMiddleware.removeMiembros,
        function (req, res) {
            res.status(200).json(req.response);
        });

    module.exports = router;

})();
