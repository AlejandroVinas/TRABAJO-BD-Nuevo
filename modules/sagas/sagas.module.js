(function () {
    'use strict';

    module.exports = init;

    function init() {
        return {
            SagasController: require('./sagas.controller'),
            SagasMiddleware: require('./sagas.middleware'),
            SagasService: require('./sagas.service'),
            SagasModel: require('./sagas.model')
        };
    }

})();
