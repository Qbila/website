/** 
 * Base backbone view class to be extended upon to create other views
 * 
 * Author: ashish.rana@lybrate.com
 */
 
define(['backbone'], function (Backbone) {
    
	"use strict";
     
    var BaseView = Backbone.View.extend({
         
        baseEvents: {
            "click #logout" : "logout"
        },
        
        pageEvents: {
         
        },
         
        events : function() {
            return _.extend({}, this.baseEvents, this.pageEvents);
        },
         
        logout: function(){
            alert("something");
        }
    });
     
    return BaseView;
});