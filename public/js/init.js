/**
 * Initialize the application, define dependencies and paths for the Javascript code here.
 * 
 * Author: ashish.rana@lybrate.com
 */


/**
 * GLOBAL LYBRATE OBJECT
 * 
 */

var Lybrate = {};

/**
 * to fetch the page router files for pathname definition.
 */

Lybrate.routers = {
  '/questions/ask' : 'askQuestion/router.askQuestion'
};

Lybrate.pageRouterPath = Lybrate.routers[window.location.pathname];

// Routers for the pages on the application.

/*global require*/

/* 
 * Each Page with connected functionalities will work as a single page application. 
 * Like, AddQuestion page will work as a single page application with each action having its own url and back functionality in it.
 * But when the user shifts to HealthTipsFeed page, it will load as a separate single page application with no connection to the AddQuestion Page.
 * 
 * TODO : For this (i think) we can have multiple routers, one for each page with routes defined in it.
 */ 

'use strict';

// Require.js allows us to configure shortcut alias
require.config({
	// The shim config allows us to configure dependencies for
	// scripts that do not call define() to register a module
	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		},
		backboneAssociations: ['backbone'],
		bootstrap:['jquery']
	},
	paths: {
		jquery: './vendor/jquery',
		underscore: './vendor/underscore',
		backbone: './vendor/backbone',
		bootstrap: './vendor/bootstrap',
		backboneAssociations: './vendor/backboneAssociations'
	}
});

require([
	'jquery',
	'underscore',
	'backbone',
	'backboneAssociations',
	'router',
	'bootstrap'
], function ($, _, Backbone, Associations, router, undefined) {
	
	// select router object based on pathname
	
	//Backbone.history.start();
	
});

