(function () {
    'use strict';

    module.exports = init;

    function init() {
        return {
            EmpleadosController: require('./empleados.controller'),
            EmpleadosMiddleware: require('./empleados.middleware'),
            EmpleadosService: require('./empleados.service'),
            EmpleadosModel: require('./empleados.model')
        };
    }

})();

