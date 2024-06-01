(function () {
    'use strict';

    module.exports = {
        createEditorial: createEditorial,
        fetchEditorial: fetchEditorial,
        fetchEditorialById: fetchEditorialById,
        updateEditorial: updateEditorial,
        deleteEditorial: deleteEditorial
    };

    var EditorialModel = require('./editorial.module')().EditorialModel;

    function createEditorial(editorial) {
        return EditorialModel.create(editorial);
    }

    function fetchEditorial() {
        return EditorialModel.find({})
            .exec();
    }

    function fetchEditorialById(editorialId) {
        return EditorialModel.findById(editorialId)
            .exec();
    }

    function updateEditorial(editorialId, editorial) {
        return EditorialModel
            .findByIdAndUpdate(editorialId, editorial, { new: true })
            .exec();
    }

    function deleteEditorial(editorialId) {
        return EditorialModel
            .findByIdAndRemove(editorialId)
            .exec();
    }
})();
