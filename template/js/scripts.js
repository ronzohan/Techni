var app = angular.module('techni',['ngRoute']);

app.config(function($routeProvider, $locationProvider) {

    $routeProvider
        .when('/', {
            templateUrl : 'pages/imageGallery.html',
            controller  : 'imageGalleryController'
        })

        .when('/image/:imageID', {
            templateUrl : 'pages/imageDetails.html',
            controller  : 'imageDetailsController'
        })
        .otherwise({
            redirectTo : '/'
        })
});

app.factory('imageRetrieveService', function($http) {
    return {
    getImages: function() {
        //return the promise directly.
        return $http.get('/Techni/template/images.json')
            .then(function(result) {
                //resolve the promise as the data
                return result.data;
            });
        }
   }
});

app.controller('imageGalleryController', function($scope, imageRetrieveService) {
    imageRetrieveService.getImages().then(function(response) {
        $scope.images = response.image;
        console.log($scope.images);
    });

    $.getScript( "js/holder.js", function( data, textStatus, jqxhr ) {
       console.log( "holder.js load was performed." );
    });

});

app.controller('imageDetailsController',['$scope', '$routeParams', function($scope, $routeParams) {
    $scope.imageID = $routeParams.imageID;

    var images = [
        //do the handling of price in the model
        {imageID:0, title:'Mona Lisa', author:'Leonardo da Vinci', dateUpload:'August 20, 2015', price:'Php 2000.00', imageSource:'resource/pics/monalisa.jpg'},
        {imageID:1, title:'The Scream', author:'Edvard Munch', dateUpload:'August 20, 2015', price:'Php 1000.00', imageSource:'resource/pics/The_Scream.jpg'},
        {imageID:3, title:'The Starry Night', author:'Vincent van Gogh', dateUpload:'August 20, 2015', price:'Request for Price', imageSource:'resource/pics/starry-night.jpg'},
    ];


}]);
