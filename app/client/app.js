'use strict';

angular.module('hubbubApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/templates/home',
        controller: 'HomeCtrl'
      })
      .when('/clients', {
        templateUrl: '/templates/client-list',
        controller: 'ClientListCtrl'
      })
      .when('/clients/:clientId', {
        templateUrl: '/templates/client-view',
        controller: 'ClientViewCtrl'
      })
      .when('/clients/:clientId/edit', {
        templateUrl: '/templates/client-edit',
        controller: 'ClientEditCtrl'
      })
      .when('/clients/:clientId/new', {
        templateUrl: '/templates/client-new',
        controller: 'ClientNewCtrl'
      })
      .when('/merchants', {
        templateUrl: '/templates/merchant-list',
        controller: 'MerchantListCtrl'
      })
      .when('/merchants/:merchantId', {
        templateUrl: '/templates/merchant-view',
        controller: 'MerchantViewCtrl'
      })
      .when('/merchants/:merchantId/edit', {
        templateUrl: '/templates/merchant-edit',
        controller: 'MerchantEditCtrl'
      })
      .when('/merchants/:merchantId/new', {
        templateUrl: '/templates/merchant-new',
        controller: 'MerchantNewCtrl'
      })
      .when('/merchants/add', {
        templateUrl: '/templates/merchant-add',
        controller: 'MerchantAddCtrl'
      })
      .when('/interactions', {
        templateUrl: '/templates/interaction-list',
        controller: 'InteractionListCtrl'
      })
      .when('/interactions/:interactionId', {
        templateUrl: '/templates/interaction-view',
        controller: 'InteractionViewCtrl'
      })
      .when('/interactions/merchants/:merchantId', {
        templateUrl: '/templates/interaction-merchant-list',
        controller: 'InteractionMerchantListCtrl'
      })
      .when('/interactions/clients/:clientId', {
        templateUrl: '/templates/interaction-client-list',
        controller: 'InteractionClientListCtrl'
      })
      .otherwise({
        templateUrl: 'templates/404'
      });
  });
