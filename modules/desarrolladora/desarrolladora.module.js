(function () {
    'use strict';

    module.exports = init;

    function init() {
        return {
            DesarrolladoraController: require('./desarroladora.controller'),
            DesarrolladoraMiddleware: require('./desarroladora.middleware'),
            DesarrolladoraService: require('./desarroladora.service'),
            DesarrolladoraModel: require('./desarroladora.model')
        };
    }

})();
