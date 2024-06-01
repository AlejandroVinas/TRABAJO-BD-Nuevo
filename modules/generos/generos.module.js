(function () {
    'use strict';

    module.exports = init;

    function init() {
        return {
            GenerosController: require('./generos.controller'),
            GenerosMiddleware: require('./generos.middleware'),
            GenerosService: require('./generos.service'),
            GenerosModel: require('./generos.model')
        };
    }

})();

