// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })


  .controller("appController", function ($scope, $http) {

    $http.defaults.headers.common.Authorization = '';


    $scope.abc = function () {

      $http.post("/sendSms", {

        number: "+92" + $scope.number,
        message: $scope.message

      }).then(function (suc) {

          $scope.status = "Sent : " + $scope.message;
          console.log("succ: ",suc)
          $scope.message="";
        },
        function (err) {
          console.log("err: ",err)
          $scope.status = "*** Message Not Sent : " + $scope.message;
        });


    }


  });
