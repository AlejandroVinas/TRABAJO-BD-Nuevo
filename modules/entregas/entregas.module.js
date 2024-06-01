(function () {
    'use strict';

    module.exports = init;

    function init() {
        return {
            EditorialController: require('./editorial.controller'),
            EditorialMiddleware: require('./editorial.middleware'),
            EditorialService: require('./editorial.service'),
            EditorialModel: require('./editorial.model')
        };
    }

})();
