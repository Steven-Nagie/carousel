'use strict';

angular.module('app', []);
'use strict';

angular.module('app').service('imgService', function ($http, $q) {

  this.getPhotos = function () {
    var deferObj = $q.defer();
    $http({
      method: 'GET',
      url: 'https://api.unsplash.com/photos/curated?client_id=67ce73d38af17f43c003c79965c942311acc6e2c8d24a626db0f475bea9b6948'
    }).then(function (response) {
      var images = [];
      var parsedImages = response.data;
      for (var i = 0; i < parsedImages.length; i++) {
        images.push(parsedImages[i].urls.regular);
      }
      deferObj.resolve(images);
    });
    return deferObj.promise;
  };

  var random = 'random';
});
'use strict';

angular.module('app').controller('mainCtrl', function ($scope, imgService) {

  $scope.getPhotos = function () {
    imgService.getPhotos().then(function (response) {
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
//# sourceMappingURL=bundle.js.map
