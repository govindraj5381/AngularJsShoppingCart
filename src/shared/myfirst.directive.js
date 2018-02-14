angular.module('shoppingcart.shared')
    .directive('myFirst', [function(){
        return {
                restrict : 'A',
                templateUrl: 'src/shared/myfirst.directive.html',
                scope : {},
                link : function(scope,element, attributes){

                }
        };
    }]);