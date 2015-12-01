(function () {
    var app = angular.module('gemStore', []);

    var gems = [
        {
            name: 'Dodecahedron',
            price: 2.95,
            description: 'Putem noi, ca oameni, sa...',
            canPurchase: true,
            soldOut: true,
            images: [
                {
                    full: './images/dode_big.png',
                    thumb: './images/dode_small.gif'
                },
                {
                    full: './images/paraleli_big.jpg',
                    thumb: './images/paraleli_small.jpg'
                },
            ],
            reviews: [
                {stars: 5,
                body: "I love this product",
                author: "joe@yahoo.com"
                },
                {stars: 1,
                body: "this sucks",
                author: "adam@west.com"
                }
            ]
        },
        {
            name: 'Paralelipiped',
            price: 5.95,
            description: '... sa zicem ceva',
            canPurchase: false,
            soldOut: false,
            images: [
                {
                    full: './images/dode_big.png',
                    thumb: './images/dode_small.gif'
                },
                {
                    full: './images/paraleli_big.jpg',
                    thumb: './images/paraleli_small.jpg'
                },
            ],
            reviews: [
                {stars: 2,
                    body: "meh",
                    author: "adi@yahoo.com"
                },
                {stars: 7,
                    body: "wow",
                    author: "ji2m@west.com"
                }
            ]
        }
    ]

    app.controller('StoreController', function () {
        this.products = gems;
    });

    app.controller("PanelController", function(){
        this.tab = 1;
        this.selectTab = function(setTab) {
            this.tab = setTab;
        };
        this.isSelected = function(checkTab) {
            return (this.tab === checkTab);
        }
    });

})();
