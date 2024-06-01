(function () {
    'use strict';

    module.exports = {
        addEditorial: addEditorial,
        getEditorial: getEditorial,
        getEditorialById: getEditorialById,
        modifyEditorial: modifyEditorial,
        removeEditorial: removeEditorial
    };

    var EditorialService = require('./editorial.module')().EditorialService;

    function addEditorial(req, res, next) {
        EditorialService.createEditorial(req.body)
            .then(success)
            .catch(failure);

        function success(data) {
            req.response = data;
            next();
        }

        function failure(error) {
            next(error);
        }
    }

    function getEditorial(req, res, next) {
        EditorialService.fetchEditorial()
            .then(success)
            .catch(failure);

        function success(data) {
            req.response = data;
            next();
        }

        function failure(err) {
            next(err);
        }
    }

    function getEditorialById(req, res, next) {
        EditorialService.fetchEditorialById(req.params.userId)
            .then(success)
            .catch(failure);

        function success(data) {
            req.response = data;
            next();
        }

        function failure(err) {
            next(err);
        }
    }

    function modifyEditorial(req, res, next) {
        EditorialService.updateEditorial(req.params.editorialId, req.body)
            .then(success)
            .catch(error);

        function success(data) {
            req.response = data;
            next();
        }

        function error(err) {
            next(err);
        }
    }

    function removeEditorial(req, res, next) {
        EditorialService.deleteEditorial(req.params.editorialId)
            .then(success)
            .catch(error);

        function success(data) {
            req.response = data;
            next();
        }

        function error(err) {
            next(err);
        }
    }
})();
