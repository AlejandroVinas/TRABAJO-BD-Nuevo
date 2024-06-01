(function () {
    'use strict';

    module.exports = {
        createStockconduccion: createStockconduccion,
        fetchStockconduccion: fetchStockconduccion,
        fetchStockconduccionById: fetchStockconduccionById,
        updateStockconduccion: updateStockconduccion,
        deleteStockconduccion: deleteStockconduccion
    };

    var StockconduccionModel = require('./stockconduccion.module')().StockconduccionModel;

    function createStockconduccion(stockconduccion) {
        return StockconduccionModel.create(stockconduccion);
    }

    function fetchStockconduccion() {
        return StockconduccionModel.find({})
            .exec();
    }

    function fetchStockconduccionById(stockconduccionId) {
        return StockconduccionModel.findById(stockconduccionId)
            .exec();
    }

    function updateStockconduccion(stockconduccionId, stockconduccion) {
        return StockconduccionModel
            .findByIdAndUpdate(stockconduccionId, stockconduccion, { new: true })
            .exec();
    }

    function deleteStockconduccion(stockconduccionId) {
        return StockconduccionModel
            .findByIdAndRemove(stockconduccionId)
            .exec();
    }
})();
