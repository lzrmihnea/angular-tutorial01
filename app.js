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
