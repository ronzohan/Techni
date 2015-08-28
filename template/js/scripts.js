var app = angular.module('techni',[]);

app.controller('buildThumbnailController', function($scope) {
    $scope.images = [
        {imageID:0, title:'Mona Lisa', author:'Leonardo da Vinci', dateUpload:'August 20, 2015'},
        {imageID:1, title:'The Scream', author:'Edvard Munch', dateUpload:'August 20, 2015'},
        {imageID:2, title:'The Starry Night', author:'Vincent van Gogh', dateUpload:'August 20, 2015'},
        {imageID:3, title:'The Starry Night', author:'Vincent van Gogh', dateUpload:'August 20, 2015'}
    ];
});

app.controller('viewImageDetailController', function($scope) {


});
