angular.module('mijnweer', ['ionic', 'mijnweer.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: "/search",
    views: {
      'menuContent': {
        templateUrl: "templates/search.html"
      }
    }
  })

  .state('app.rain', {
    url: "/rain",
    views: {
      'menuContent': {
        templateUrl: "templates/rain.html",
        controller: 'rainCtrl'
      }
    }
  })
    .state('app.48h', {
      url: "/48h",
      views: {
        'menuContent': {
          templateUrl: "templates/48h.html",
          controller: '48hCtrl'
        }
      }
    })

  .state('app.14d', {
    url: "/14d",
    views: {
      'menuContent': {
        templateUrl: "templates/14d.html",
        controller: '14dCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/48h');
});
