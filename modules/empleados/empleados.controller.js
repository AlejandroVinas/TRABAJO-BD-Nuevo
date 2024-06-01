(function () {
    'use strict';

    var express = require('express');
    var router = express.Router();

    var EmpleadosMiddleware = require('./empleados.module')().EmpleadosMiddleware;

    router.post('/',
        EmpleadosMiddleware.addEmpleados,
        function (req, res) {
            res.status(201).json(req.response);
            
        });

    router.get('/',
        EmpleadosMiddleware.getEmpleados,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.get('/:userId',
        EmpleadosMiddleware.getEmpleadosById,
        function (req, res) {
            res.status(200).json(req.response);
        });

router.put('/:EmpleadosId',
        EmpleadosMiddleware.modifyEmpleados,
        function (req, res) {
            res.status(200).json(req.response);
        });
    router.delete('/:EmpleadosId',
        EmpleadosMiddleware.removeEmpleados,
        function (req, res) {
            res.status(200).json(req.response);
        });

    module.exports = router;

})();
