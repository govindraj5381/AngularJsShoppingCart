angular.module('shoppingcart.shared')
    .directive('username', [function(){
        return {
                restrict : 'A',
                require : 'ngModel',
                link : function(scope,el, attrs, ngModelCtrl){

                }
        };
    }]);