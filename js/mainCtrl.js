angular.module('app').controller('mainCtrl', function($scope, imgService) {

  $scope.getPhotos = function() {
    imgService.getPhotos().then(function(response) {
        $scope.photos = response;

        console.log($scope.photos);

        localStorage.setItem('photos', JSON.stringify($scope.photos));
    });
  };

  if (localStorage.photos) {
    $scope.photos = JSON.parse(localStorage.getItem('photos'));
  } else {
    $scope.getPhotos();
  }


});
