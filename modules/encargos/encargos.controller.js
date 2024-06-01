(function () {
    'use strict';

    var express = require('express');
    var router = express.Router();

    var EncargosMiddleware = require('./encargos.module')().EncargosMiddleware;

    router.post('/',
        EncargosMiddleware.addEncargos,
        function (req, res) {
            res.status(201).json(req.response);
            
        });

    router.get('/',
        EncargosMiddleware.getEncargos,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.get('/:userId',
        EncargosMiddleware.getEncargosById,
        function (req, res) {
            res.status(200).json(req.response);
        });

router.put('/:EncargosId',
        EncargosMiddleware.modifyEncargos,
        function (req, res) {
            res.status(200).json(req.response);
        });
    router.delete('/:EncargosId',
        EncargosMiddleware.removeEncargos,
        function (req, res) {
            res.status(200).json(req.response);
        });

    module.exports = router;

})();
