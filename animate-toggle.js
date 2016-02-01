(function() {
    'use strict';

    angular.module('feb-animate-toggle', []).directive('febAnimateToggle', AnimateToggle);

    function AnimateToggle() {

        var directive = {
            restrict: 'A',
            link: link
        };

        return directive;

        function link(scope, element, attrs) {

        }

    }

})();