(function () {
    'use strict';
    
    module.exports = {
        createDesarrolladora: createDesarrolladora,
        fetchDesarrolladora: fetchDesarrolladora,
        fetchDesarrolladoraById: fetchDesarrolladoraById,
        updateDesarrolladora: updateDesarrolladora,
        deleteDesarrolladora: deleteDesarrolladora
    };

    var DesarrolladoraModel = require('./desarroladora.module')().DesarrolladoraModel;

    function createDesarrolladora(desarrolladora) {
        return DesarrolladoraModel.create(desarrolladora);
    }

    function fetchDesarrolladora() {
        return DesarrolladoraModel.find({})
            .exec();
    }

    function fetchDesarrolladoraById(desarrolladoraId) {
        return DesarrolladoraModel.findById(desarrolladoraId)
            .exec();
    }

    function updateDesarrolladora(desarrolladoraId, desarrolladora) {
        return DesarrolladoraModel
            .findByIdAndUpdate(desarrolladoraId, desarrolladora, {new: true})
            .exec();
    }

    function deleteDesarrolladora(desarrolladoraId) {
        return DesarrolladoraModel
            .findByIdAndRemove(desarrolladoraId)
            .exec();
    }
})();
