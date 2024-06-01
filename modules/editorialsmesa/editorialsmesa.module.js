(function () {
    'use strict';

    module.exports = init;

    function init() {
        return {
            EditorialsmesaController: require('./editorialsmesa.controller'),
            EditorialsmesaMiddleware: require('./editorialsmesa.middleware'),
            EditorialsmesaService: require('./editorialsmesa.service'),
            EditorialsmesaModel: require('./editorialsmesa.model')
        };
    }

})();

