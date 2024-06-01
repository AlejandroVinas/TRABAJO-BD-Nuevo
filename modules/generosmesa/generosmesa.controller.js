(function () {
    'use strict';

    var express = require('express');
    var router = express.Router();

    var GenerosmesaMiddleware = require('./generosmesa.module')().GenerosmesaMiddleware;

    router.post('/',
        GenerosmesaMiddleware.addGenerosmesa,
        function (req, res) {
            res.status(201).json(req.response);
            
        });

    router.get('/',
        GenerosmesaMiddleware.getGenerosmesa,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.get('/:userId',
        GenerosmesaMiddleware.getGenerosmesaById,
        function (req, res) {
            res.status(200).json(req.response);
        });

router.put('/:GenerosmesaId',
        GenerosmesaMiddleware.modifyGenerosmesa,
        function (req, res) {
            res.status(200).json(req.response);
        });
    router.delete('/:GenerosmesaId',
        GenerosmesaMiddleware.removeGenerosmesa,
        function (req, res) {
            res.status(200).json(req.response);
        });

    module.exports = router;

})();
