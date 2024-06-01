(function () {
    'use strict';

    module.exports = init;

    function init() {
        return {
            StockconduccionController: require('./stockconduccion.controller'),
            StockconduccionMiddleware: require('./stockconduccion.middleware'),
            StockconduccionService: require('./stockconduccion.service'),
            StockconduccionModel: require('./stockconduccion.model')
        };
    }

})();
