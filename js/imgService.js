angular.module('app').service('imgService', function($http, $q) {

  this.getPhotos = function() {
    var deferObj = $q.defer();
    $http({
        method: 'GET',
        url: 'https://api.unsplash.com/photos/curated?client_id=67ce73d38af17f43c003c79965c942311acc6e2c8d24a626db0f475bea9b6948'
    }).then(function(response) {
      var images = [];
      var parsedImages = response.data;
      for (var i = 0; i < parsedImages.length; i++) {
        images.push(parsedImages[i].urls.regular);
        images.splice(9, 1);
      }
      deferObj.resolve(images);
    });
    return deferObj.promise;
  };

  var random = 'random';

});
