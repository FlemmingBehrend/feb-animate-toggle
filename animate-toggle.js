(function() {
    'use strict';

    angular.module('feb.animate-toggle', []).directive('febAnimateToggle', AnimateToggle);

    function AnimateToggle() {

        var directive = {
            controller: Ctrl,
            controllerAs: 'vm',
            restrict: 'A',
            link: link,
            scope: {
                control: '='
            },
            transclude: true,
            template:
                '<div>' +
                    '<div ng-click="vm.toggle()">{{vm.control.toggleText}}</div>' +
                    '<div ng-transclude class="{{vm.toggleId}}" style="display: {{vm.display}}"></div>' +
                '</div>'
        };

        return directive;

        function link(scope, element, attrs, controllers) {
            controllers.control = scope.control;
            controllers.toggleId = attrs.febAnimateToggle;
            controllers.init();
        }

        function Ctrl() {
            var vm = this;

            vm.toggle = toggle;
            vm.init = initialize;

            function initialize() {
                vm.display = vm.control.show ? 'block' : 'none';
            }

            function animate() {
                if (vm.control.show) {
                    $('.' + vm.toggleId).stop(true, true).slideDown(vm.control.duration);
                } else {
                    $('.' + vm.toggleId).stop(true, true).slideUp(vm.control.duration);
                }
            }

            function toggle() {
                vm.control.show = !vm.control.show;
                animate();
            }

        }

    }

})();