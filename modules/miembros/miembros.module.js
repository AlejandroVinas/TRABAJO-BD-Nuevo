(function () {
    'use strict';

    module.exports = init;

    function init() {
        return {
            MiembrosController: require('./miembros.controller'),
            MiembrosMiddleware: require('./miembros.middleware'),
            MiembrosService: require('./miembros.service'),
            MiembrosModel: require('./miembros.model')
        };
    }

})();

