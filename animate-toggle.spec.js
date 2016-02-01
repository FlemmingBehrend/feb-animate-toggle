(function() {
    'use strict';

    describe('directive: feb-animate-toggle', function() {

        var scope, compile;

        beforeEach(function () {
            module('feb-animate-toggle');
            inject(function ($compile, $rootScope) {
                scope = $rootScope.$new();
                compile = $compile;
            });
        });

        function ce(htmlString) {
            var el = compile('<div>' + htmlString + '</div>')(scope);
            scope.$digest();
            return el;
        }

        describe('configuration', function () {

            describe('defaults', function() {

                it('hides the content', function() {

                });

                it('shows only toggle buttom if now toggle text is specified', function() {

                });

                it('uses 2000 ms animation delay if not specified', function() {

                });

                it('uses normal easing effect if not specified', function() {

                });

                it('uses slide down, slide up effect if not specified', function() {

                });

            });

            describe('object', function() {

                it('sets the content to start as displayed', function() {

                });
                
            });
        });

    });

})();