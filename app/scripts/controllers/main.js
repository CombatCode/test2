'use strict';

angular.module('allegroApp')
  .controller('MainCtrl', ['$scope', 'webStorage', function ($scope, webStorage) {
    /** 
     * Functions
     */
     function updateStorage() {
        webStorage.local.add('products', $scope.products);
     }
    $scope.loadSample = function() {
        var sampleData = [
            {
                name: 'LODÓWKO-ZAMRAŻARKA PKM KS82.3A+UB 83L A+ 82CM',
                price: '449',
                url: 'http://allegro.pl/show_item.php?item=4196881005&sh_dwh_token=d0b6dd74a8394345128e20d296cb1c5e',
                img: 'http://img01.allegroimg.pl/photos/400x300/41/96/88/10/4196881005',
                endDate: '13 maja, 12:16:59'
            },
            {
                name: 'TELEWIZOR MEDION 23,6 LCD DVD USB HDMI FULL HD',
                price: '419',
                url: 'http://allegro.pl/show_item.php?item=4196908543&sh_dwh_token=d0b6dd74a8394345128e20d296cb1c5e',
                img: 'http://img01.allegroimg.pl/photos/400x300/41/96/90/85/4196908543',
                endDate: '13 maja, 12:19:29'
            },
            {
                name: 'Rower górski MTB ARKUS Graffiti 505 SHIMANO 26cali',
                price: '599',
                url: 'http://allegro.pl/show_item.php?item=4186119043&sh_dwh_token=d0b6dd74a8394345128e20d296cb1c5e',
                img: 'http://img02.allegroimg.pl/photos/400x300/41/86/11/90/4186119043',
                endDate: '9 maja, 15:17:12'
            }
        ];
        $scope.products = sampleData;
        updateStorage();
    };
    $scope.clearAll = function() {
        $scope.products = [];
        updateStorage();
    };
    $scope.orderBy = function(order) {
        if ($scope.order === order) {
            order = '-' + order;
        }
        $scope.order = order;
    };
    $scope.submitNew = function() {
        if (!$scope.formData.img) {
            /** Default photo */
            $scope.formData.img = 'http://c.allegrostatic.pl/images/velalayout/logotypes/290856a0.allegro-pl.png';
        }
        $scope.products.push($scope.formData);
        $scope.formData = {};
        updateStorage();
    };
    $scope.remove = function(product) {
        var index  = $scope.products.indexOf(product);
        if (index > -1) {
            $scope.products.splice(index, 1);
            updateStorage();
        }
    };
    /**
     * Definitions
     */
    $scope.formData = {};
    $scope.products = webStorage.local.get('products');
    $scope.order = 'name';
  }]);
