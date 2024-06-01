(function () {
    'use strict';

    var express = require('express');
    var router = express.Router();

    var EditorialsmesaMiddleware = require('./editorialsmesa.module')().EditorialsmesaMiddleware;

    router.post('/',
        EditorialsmesaMiddleware.addEditorialsmesa,
        function (req, res) {
            res.status(201).json(req.response);
            
        });

    router.get('/',
        EditorialsmesaMiddleware.addEditorialsmesa,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.get('/:userId',
        EditorialsmesaMiddleware,getEditorialsmesaById,
        function (req, res) {
            res.status(200).json(req.response);
        });

router.put('/:EditorialsmesaId',
        EditorialsmesaMiddleware.modifyEditorialsmesa,
        function (req, res) {
            res.status(200).json(req.response);
        });
    router.delete('/:EditorialsmesaId',
        EditorialsmesaMiddleware.removeEditorialsmesa,
        function (req, res) {
            res.status(200).json(req.response);
        });

    module.exports = router;

})();