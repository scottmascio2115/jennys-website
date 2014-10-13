var app = angular.module("myApp", ["ngRoute", "angularMoment"]);

app.config(function($routeProvider){
  $routeProvider.when('/',
                      {
                        templateUrl: 'partials/app.html',
                        controller: 'MovieController'
                      })
});

app.factory('API', ['$http', function($http) {
  var API = {};

  API.nowPlaying = function(){
    return $http.get('http://localhost:3000/');
  };

  return API;
}]);

app.controller('MovieController', ['$scope', 'API', function($scope, MOVIES){

}]);
