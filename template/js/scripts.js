var app = angular.module('techni',['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'pages/imageGallery.html',
            controller  : 'imageGalleryController'
        })

        .when('/:imageID/', {
            templateUrl : 'pages/imageDetails.html',
            controller  : 'imageDetailsController'
        })

});

app.controller('imageGalleryController', function($scope) {
    $scope.images = [
        {imageID:0, title:'Mona Lisa', author:'Leonardo da Vinci', dateUpload:'August 20, 2015'},
        {imageID:1, title:'The Scream', author:'Edvard Munch', dateUpload:'August 20, 2015'},
        {imageID:2, title:'The Starry Night', author:'Vincent van Gogh', dateUpload:'August 20, 2015'},
        {imageID:3, title:'The Starry Night', author:'Vincent van Gogh', dateUpload:'August 20, 2015'},
         {imageID:3, title:'The Starry Night', author:'Vincent van Gogh', dateUpload:'August 20, 2015'},
          {imageID:3, title:'The Starry Night', author:'Vincent van Gogh', dateUpload:'August 20, 2015'}
          , {imageID:3, title:'The Starry Night', author:'Vincent van Gogh', dateUpload:'August 20, 2015'}
          , {imageID:3, title:'The Starry Night', author:'Vincent van Gogh', dateUpload:'August 20, 2015'}
    ];
});

app.controller('imageDetailsController',['$scope', '$routeParams', function($scope, $routeParams) {
    $scope.imageID = $routeParams.imageID;

}]);

