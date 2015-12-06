(function () {
    var app = angular.module('gemStore', ['store-directives']);

    //$http({method:'GET', url: '/store-products.json'});
    //$http.get('/store-products.json', {apiKey: 'myApiKey' }); // Shortcut method

    //$http.post('/path/to/resource.json', {param:'value'});
    //$http.delete('/path/to/resource.json');
    //$http({ method:'OPTIONS', url:'/path/to/resource.json'});
    //$http({ method: 'PATCH', url:'/path/to/resource.json'});
    //$http({ method:'TRACE', url:'/path/to/resource.json'});


    app.controller('StoreController', function ($http) {
        var store = this;
        store.products = [ ];

        $http.get('store-products.json').success(function(data){
            console.log(data);
            store.products = data;
        })
    });

    //app.controller('StoreController', function () {
    //    this.products = gems;
    //});


    app.controller("ReviewController", function() {
        this.review = {};

        this.addReview = function(product) {
            product.reviews.push(this.review);
            this.review={};
        }
    });

    //// Injecting one service
    //app.controller('SomeController01', ['$http', function($http){
    //}]);
    //
    //// Injecting two services
    //app.controller('SomeController02', ['$http', '$log', function($http, $log){
    //}]);

    //var gems= [
    //    {
    //        name: 'Dodecahedron',
    //        price: 2.95,
    //        description: 'Putem noi, ca oameni, sa...',
    //        canPurchase: true,
    //        soldOut: true,
    //        images: [
    //            {
    //                full: './images/dode_big.png',
    //                thumb: './images/dode_small.gif'
    //            },
    //            {
    //                full: './images/paraleli_big.jpg',
    //                thumb: './images/paraleli_small.jpg'
    //            },
    //        ],
    //        reviews: [
    //            {stars: 5,
    //                body: "I love this product",
    //                author: "joe@yahoo.com"
    //            }
    //        ]
    //    },
    //    {
    //        name: 'Paralelipiped',
    //        price: 5.95,
    //        description: '... sa zicem ceva',
    //        canPurchase: false,
    //        soldOut: false,
    //        images: [
    //            {
    //                full: './images/dode_big.png',
    //                thumb: './images/dode_small.gif'
    //            },
    //            {
    //                full: './images/paraleli_big.jpg',
    //                thumb: './images/paraleli_small.jpg'
    //            },
    //        ],
    //        reviews: [
    //            {stars: 7,
    //                body: "wow",
    //                author: "ji2m@west.com"
    //            }
    //        ]
    //    }
    //]

})();
