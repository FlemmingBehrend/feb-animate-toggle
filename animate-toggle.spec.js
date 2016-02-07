(function() {
    'use strict';

    describe('directive: feb-animate-toggle', function() {

        var scope, compile;

        beforeEach(function () {
            module('feb.animate-toggle');
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

                it('throws exceptions if no identifier is specified', function () {
                    expect(function () {
                        ce('<feb-animate-toggle></feb-animate-toggle>');
                    }).toThrow('Error initializing feb-animate-toggle. Identifier missing.');
                });

                it('hides the content', function() {
                    var el = ce('<feb-animate-toggle identifier="i">this is hidden</feb-animate-toggle>');
                    expect(el.find('.i').attr('style')).toBe('display: none');
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