(function () {
    'use strict';

    module.exports = init;

    function init() {
        return {
            StockIndiesController: require('./stockIndies.controller'),
            StockIndiesMiddleware: require('./stockIndies.middleware'),
            StockIndiesService: require('./stockIndies.service'),
            StockIndiesModel: require('./stockIndies.model')
        };
    }

})();
