angular.module('mijnweer.controllers', [])

.filter('spacetobreak', function() {
	return function(input) {
		return input.replace(' ', '<br/>');
	}
})

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('48hCtrl', function($scope, $http) {
  $scope.doRefresh = function() {
    $http.jsonp("http://www.grijspaarde.nl/weer/2days.php?callback=JSON_CALLBACK")
        .success(function(data) {
            //console.log(data);
            $scope.update = data.update;
            $scope.voorspellingen = data.data;
        })
        .finally(function() {
          $scope.$broadcast('scroll.refreshComplete');
        });
  };
  $scope.doRefresh();
})

.controller('14dCtrl', function($scope, $http) {
  $scope.doRefresh = function() {
    $http.jsonp("http://www.grijspaarde.nl/weer/14days.php?callback=JSON_CALLBACK")
        .success(function(data) {
            console.log(data);
            $scope.update = data.update;
            $scope.voorspellingen = data.data;
            console.log(data.data);
        })
        .finally(function() {
          $scope.$broadcast('scroll.refreshComplete');
        });
  };
  $scope.doRefresh();
})
