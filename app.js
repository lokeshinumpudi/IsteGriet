(function () {
    'use strict';

    angular
        .module('ISTE', ['ngRoute'])
        .config(config)
        .run(run)
        .controller('bodyCtrl', bodyCtrl);

    config.$insert = ['$routeProvider'];
    function config($routeProvider) {

        // Routes for our site

        $routeProvider.
            when('/', {
                templateUrl: 'views/home.html',
                controller: 'homeCtrl',
                controllerAs: 'home',
                activetab: 'home'

            })
            .when('/events', {
                templateUrl: 'views/events.html',
                controller: 'eventsCtrl',
                controllerAs: 'events',
                activetab: 'events'

            })
            .when('/mela', {
                templateUrl: 'views/melaTest.html',
                controller: 'melaCtrl',
                controllerAs: 'mela',
                activetab: 'mela'

            })
            .when('/event/:eventname', {
                templateUrl: 'views/eventDetail.html',
                controller: 'eventDetailCtrl',
                controllerAs: 'eventDetail'
            })
            .when('/team', {
                templateUrl: 'views/team.html',
                controller: 'teamCtrl',
                controllerAs: 'team',
                activetab: 'team'
            })
            .when("/about", {
                templateUrl: 'views/about.html',
                controller: 'aboutCtrl',
                controllerAs: 'about',
                activetab: 'about'
            })
            .when("/contact", {
                templateUrl: 'views/contact.html',
                controller: 'contactCtrl',
                controllerAs: 'contact',
                activetab: 'contactUs'
            })
            .otherwise('/')


    }//config


    run.$inject = ['isteData'];

    function run(isteData){

        
    }


    bodyCtrl.$inject = ['$scope', '$route']
    function bodyCtrl($scope, $route) {
        var bodyvm = this;
        bodyvm.x = true;
        bodyvm.activetab = "";
        $scope.$on("$routeChangeSuccess", function (event, current, next) {
            bodyvm.activetab = current.activetab;
        });

    }//bodyCtrl
})(); //iife

