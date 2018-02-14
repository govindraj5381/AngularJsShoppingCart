angular.module('shoppingcart', [
    'ui.router',
    'shoppingcart.shared',
    'shoppingcart.product',
    'shoppingcart.cart' 
]);

angular.module('shoppingcart')
    .config(['$stateProvider', '$urlRouterProvider', 
    function($stateProvider, $urlRouterProvider){
        $stateProvider.state({
            name: 'home',
            url: '/',
            component: 'productList',
            resolve: {
                products: ['ProductService', function(ProductService){
                    return ProductService
                            .getProducts()
                            .then(function(res){
                                return res.data;
                            });
                }]
            }
        });

        $stateProvider.state({
            name: 'addProduct',
            url: '/add-product',
            component: 'addProduct'
        });

        $stateProvider.state({
            name: 'showProductInfo',
            url: '/product-details/{productId}',
            component: 'productDetails',
            resolve : {
                product : ['ProductService','$transition$',function(
                    ProductService,$transition$) {
                        var params = $transition$.params();
                        var productid = params.productId;
                        return ProductService.getProductDetails(productid);
                    }
                ]
            }
        });

        $stateProvider.state({
            name: 'cart',
            url: '/cart',
            component: 'cart'
        });

        $urlRouterProvider.otherwise('/');

    }]);