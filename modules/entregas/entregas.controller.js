(function () {
    'use strict';

    var express = require('express');
    var router = express.Router();

    var EditorialMiddleware = require('./editorial.module')().EditorialMiddleware;

    router.post('/',
        EditorialMiddleware.addEditorial,
        function (req, res) {
            res.status(201).json(req.response);
        });

    router.get('/',
        EditorialMiddleware.getEditorial,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.get('/:userId',
        EditorialMiddleware.getEditorialById,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.put('/:editorialId',
        EditorialMiddleware.modifyEditorial,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.delete('/:editorialId',
        EditorialMiddleware.removeEditorial,
        function (req, res) {
            res.status(200).json(req.response);
        });

    module.exports = router;

})();
