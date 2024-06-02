(function () {
    'use strict';

    module.exports = init;

    function init() {
        return {
            DesarrolladoraController: require('./desarrolladora.controller'),
            DesarrolladoraMiddleware: require('./desarrolladora.middleware'),
            DesarrolladoraService: require('./desarrolladora.service'),
            DesarrolladoraModel: require('./desarrolladora.model')
        };
    }

})();
