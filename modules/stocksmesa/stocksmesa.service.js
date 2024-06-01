(function () {
    'use strict';
    
    module.exports = {
        createStocksmesa: createStocksmesa,
        fetchStocksmesa: fetchStocksmesa,
        fetchStocksmesaById: fetchStocksmesaById,
        updateStocksmesa: updateStocksmesa,
        deleteStocksmesa: deleteStocksmesa
    };

    var StocksmesaModel = require('./stocksmesa.module')().StocksmesaModel;
    function createStocksmesa(stocksmesa) {
        return StocksmesaModel.create(stocksmesa);
    }

    function fetchStocksmesa() {
        return StocksmesaModel.find({})
            .exec();
    }

    function fetchStocksmesaById(stocksmesaId) {
        return StocksmesaModel.findById(stocksmesaId)
            .exec();
    }

    function updateStocksmesa(stocksmesaId, user) {
        return StocksmesaModel
            .findByIdAndUpdate(stocksmesaId, user, {new: true})
            .exec();
    }

    function deleteStocksmesa(generoId) {
        return StocksmesaModel
            .findByIdAndRemove(generoId)
            .exec();
    }
})();
