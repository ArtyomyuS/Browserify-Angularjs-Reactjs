'use strict';

var angular = require('angular');
var ngAnimate = require('angular-animate');
var ngCookies = require('angular-cookies');
var ngResource = require('angular-resource');
var ngSanitize = require('angular-sanitize');
var ngTouch = require('angular-touch');
var uiRouter = require('angular-ui-router');
var ngReact = require('ngreact');


/**
 * Main module.
 */
var app = angular.module('app',
    [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngTouch',
        'ngReact',
        'ui.router'
    ]
);


/**
 * Main routing.
 */
require('./controller/MainController');
require('./view/layout/MainLayout.jsx');

app.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $httpProvider) {

    // CORS header
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.withCredentials = true;

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('main', {
            url: '/',
            template: '<react-component name="MainLayout" watch-depth="reference"/>',
            controller: 'MainController'
        });
}]);


/**
 * Interceptors.
 */
app.run(['$rootScope', '$stateParams', '$state', '$http',
    function ($rootScope, $stateParams, $state, $http) {
        $rootScope.$stateParams = $stateParams;
        if (window._) $rootScope._ = window._;

    }
]);

