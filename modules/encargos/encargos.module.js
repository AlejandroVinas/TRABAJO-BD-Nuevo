(function () {
    'use strict';

    module.exports = init;

    function init() {
        return {
            EncargosController: require('./encargos.controller'),
            EncargosMiddleware: require('./encargos.middleware'),
            EncargosService: require('./encargos.service'),
            EncargosModel: require('./encargos.model')
        };
    }

})();

