/**
 * Router definitions for every pages as a single page backbone application. 
 * 
 * Author: ashish.rana@lybrate.com
 */

define(['jquery', 'underscore', 'backbone', 'modules/'+Lybrate.pageRouterPath], function ($, _, Backbone, routerObject) {
	
	_.templateSettings = {
		interpolate : /\<\@\=(.+?)\@\>/gim,
		evaluate : /\<\@([\s\S]+?)\@\>/gim,
		escape : /\<\@\-(.+?)\@\>/gim
	};
	
	new routerObject();
	
	Backbone.history.start();
});
