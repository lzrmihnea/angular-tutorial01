/**
 * Created by Mihnea on 12/1/2015.
 */

(function(){

    var app = angular.module('store-directives', []);

    app.directive('productTitle', function(){
        return {
            //restrict: 'E',   // Type of Directive (E for Element)
            restrict: 'A',   // Type of Directive (A for Attribute)
            templateUrl: 'views/product-title.html' // (URL of a template)
        };
    });

    app.directive("productGallery", function(){
        return {
            restrict: 'E',
            templateUrl: 'views/product-gallery.html',
            controller:function(){
                this.current = 0;
                this.setCurrent = function(imageNumber){
                    this.current = imageNumber || 0;
                };
            },
            controllerAs:'gallery'
        };

    });

    app.directive('productPanels', function(){
        return {
            restrict: 'E',   // Type of Directive (E for Element)
            templateUrl: 'views/product-panels.html', // (URL of a template)

            controller:function(){
                this.tab = 1;
                this.selectTab = function(setTab) {
                    this.tab = setTab;
                };
                this.isSelected = function(checkTab) {
                    return (this.tab === checkTab);
                }
            },
            controllerAs:"panel"
        };
    });

})();
