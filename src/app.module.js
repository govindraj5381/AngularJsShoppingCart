angular.module('shoppingcart', [
    'ui.router',
    'shoppingcart.product',
    'shoppingcart.cart',
    'shoppingcart.shared'
]);

angular.module('shoppingcart').config([
    '$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
$stateProvider.state({
    name : 'home',
    url : '/',
    component : 'productList'
});

$stateProvider.state({
    name : 'addProduct',
    url : '/add-product',
    component : 'addProduct'
});

$stateProvider.state({
    name : 'cart',
    url : '/cart',
    component : 'cart'
});

$urlRouterProvider.otherwise('/')
    }
])