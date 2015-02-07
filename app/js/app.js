var app = angular.module("myApp", ["ngRoute", "angularMoment", 'ui.bootstrap', 'angularTypewrite']);

app.config(function($routeProvider){
  $routeProvider.when('/',
                      {
                        templateUrl: 'partials/app.html',
                        controller: 'CardController'
                      })
});

app.factory('API', ['$http', function($http) {
  var API = {};

  API.Allcards = function(){
    return $http.get('http://localhost:3000/');
  };

  return API;
}]);

app.controller('CardController', ['$scope', 'API', function($scope, CARDS){
  $scope.myInterval = 2500;
  var slides = $scope.slides = [];
  $scope.addSlide = function() {
    var newWidth = 600 + slides.length + 1;
    slides.push({
      image: 'http://placekitten.com/' + newWidth + '/300',
    });
  };
  for (var i=0; i<4; i++) {
    $scope.addSlide();
  }
}]);
