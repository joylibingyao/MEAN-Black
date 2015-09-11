var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
      $routeProvider
        .when('/',{
            templateUrl: 'partials/front.html'
        })
        .when('/main',{
            templateUrl: 'partials/main.html'
        })
         .when('/new_question',{
            templateUrl: 'partials/new_question.html'
        })
        .when('/question/:id',{
            templateUrl: 'partials/question.html'
        })
        .when('/new_answer',{
            templateUrl: 'partials/new_answer.html'
        })
        .otherwise({
          redirectTo: '/'
        });
    });

    





