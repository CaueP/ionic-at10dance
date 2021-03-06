angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('home', {
    url: '/',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  .state('tabsController.students', {
    url: '/students',
    views: {
      'tab1': {
        templateUrl: 'templates/students.html',
        controller: 'studentsCtrl'
      }
    }
  })

  .state('tabsController.classes', {
    url: '/classes',
    views: {
      'tab2': {
        templateUrl: 'templates/classes.html',
        controller: 'classesCtrl'
      }
    }
  })

  .state('tabsController.class', {
    url: '/class/:id',
    views: {
      'tab2': {
        templateUrl: 'templates/class.html',
        controller: 'classCtrl'
      }
    }
  })

  .state('tabsController.student', {
    url: '/student/:id',
    views: {
      'tab1': {
        templateUrl: 'templates/student.html',
        controller: 'studentCtrl'
      }
    }
  })

  .state('message', {
    url: '/message/:id',
    templateUrl: 'templates/message.html',
    controller: 'messageCtrl'
  })

  .state('roster', {
    url: '/roster/:id',
    templateUrl: 'templates/roster.html',
    controller: 'rosterCtrl'
  })

$urlRouterProvider.otherwise('/')

  

});