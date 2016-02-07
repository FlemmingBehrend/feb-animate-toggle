(function() {
    'use strict';

    angular.module('feb.animate-toggle', []).directive('febAnimateToggle', AnimateToggle);

    function AnimateToggle() {

        var directive = {
            controller: Ctrl,
            controllerAs: 'vm',
            bindToController: {
                identifier: '@',
                header: '@',
                show: '@',
                duration: '=',
                done: '&'
            },
            restrict: 'E',
            link: link,
            scope: true,
            transclude: true,
            template:
                '<div>' +
                    '<div ng-click="vm.toggle()">{{vm.header}}</div>' +
                    '<div ng-transclude class="{{vm.identifier}}" style="display: {{vm.display}}"></div>' +
                '</div>'
        };

        return directive;

        function link(scope, element, attrs, controller) {
            if (!attrs.identifier)
                throw 'Error initializing feb-animate-toggle. Identifier missing.';
            controller.initialize();
        }

        function Ctrl() {

            this.toggle = toggle;
            this.initialize = initialize;

            function initialize() {
                this.display = (this.show === 'true') ? 'block' : 'none';
            }

            function toggle() {
                var options = {
                    duration: this.duration,
                    done: this.done
                };
                console.log(options);
                $('.' + this.identifier).stop(true, true).toggle(options);
            }

        }

    }

})();