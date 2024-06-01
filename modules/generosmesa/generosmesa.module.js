(function () {
    'use strict';

    module.exports = init;

    function init() {
        return {
            GenerosmesaController: require('./generosmesa.controller'),
            GenerosmesaMiddleware: require('./generosmesa.middleware'),
            GenerosmesaService: require('./generosmesa.service'),
            GenerosmesaModel: require('./generosmesa.model')
        };
    }

})();

