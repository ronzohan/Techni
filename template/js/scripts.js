var app = angular.module('techni',['ngRoute']);

app.config(function($routeProvider, $locationProvider) {

    $routeProvider
        .when('/home', {
            templateUrl : 'pages/imageGallery.html',
            controller  : 'imageGalleryController'
        })

        .when('/image/:imageID', {
            templateUrl : 'pages/imageDetails.html',
            controller  : 'imageDetailsController'
        })
        .otherwise({
            redirectTo : '/home'
        })

    $locationProvider.html5Mode({
        enabled: true
    });

});

app.controller('imageGalleryController', function($scope) {
    $scope.images = [
        //do the handling of price in the model
        {imageID:0, title:'Mona Lisa', author:'Leonardo da Vinci', dateUpload:'August 20, 2015', price:'Php 2000.00', imageSource:'resource/pics/monalisa.jpg'},
        {imageID:1, title:'The Scream', author:'Edvard Munch', dateUpload:'August 20, 2015', price:'Php 1000.00', imageSource:'resource/pics/The_Scream.jpg'},
        {imageID:3, title:'The Starry Night', author:'Vincent van Gogh', dateUpload:'August 20, 2015', price:'Request for Price', imageSource:'resource/pics/starry-night.jpg'},
    ];

    $.getScript( "js/holder.js", function( data, textStatus, jqxhr ) {
        console.log( data ); // Data returned
        console.log( textStatus ); // Success
        console.log( jqxhr.status ); // 200
        console.log( "Load was performed." );
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
