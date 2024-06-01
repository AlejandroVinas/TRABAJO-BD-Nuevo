(function () {
    'use strict';

    module.exports = init;

    function init() {
        return {
            StocksmesaController: require('./stocksmesa.controller'),
            StocksmesaMiddleware: require('./stocksmesa.middleware'),
            StocksmesaService: require('./stocksmesa.service'),
            StocksmesaModel: require('./stocksmesa.model')
        };
    }

})();

