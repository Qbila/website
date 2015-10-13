define(
	['view.Base'], 
	function (BaseView) {
  
  "use strict";
     
  return {
	  
	AskQuestion : BaseView.extend({
	  
	  el: "#askQuestion-index",
	  
	  pageEvents: {
		  "click #modifyQuestion": 'modifyQuestion'
	  },
	  
	  template: $("#t-askQuestion-index").html(),
	  
	  model : {},
	  
	  initialize : function(){
		  // root page opens
		  // ask for login status of the user. fill in the model.user based on that.
		  // if not logged in, ask for login.
	  },
	  
	  render: function(){
		 var self = this;
		 this.$el.html(_.template(self.template)({data : self.model}));
	  },
	  
	  selectQuestion: function(){
		  
	  },
	  
	  modifyQuestion: function() {
		// show the interface to modify the question, with present question in it. 
	  },
	  
	  selectDoctor: function(){
		// let the user to select from the list of doctors ready to answer the question.
	  },
	  
	  selectPatient: function(){
		// let the user to select from the list of relatives.
	  },
	  
	  addRelative: function(){
		// lets user to add relative
	  }
	  
    }),
  
    signUpOrLogin : Backbone.View.extend({
	  
	  el: "#askQuestion-signUp",
  
	  pageEvents: {
		//  "click ": ""
	  }
	  
    }),
    
    multiStepInterface : Backbone.View.extend({
    	
    	el: "#multiStepInterface",
    	
    	self: this,
    	
    	template: $("#t-multiStepInterface").html(),
    	
    	model : Backbone.Model.extend({
    		defaults: {
    	    	title : '',
    	    	index : '',
    	    	backLinks : '',
    	    	backLinkFunction : '',
    	    	status: '',  // done, toDo, active
    	    	content: '',
    	    	htmlTemplate : 'something to link the view to functionality triggered by backlink'
    	    }
    	}),
    	
    	collection: {},
    	
    	config: {},
    	
    	initialize: function(){
    		// TODO : find a better way to handle model and collection
    		this.collection = new Backbone.Collection;
    		
    	},
    	
    	constructCollection : function(){
    		// add new step to the multistep
    		// create new model 
    		// add to collection
    		
    		var self = this;
    		
    		this.collection.add(this.config);
    		
    		console.log(this.collection);
    		
    		self.collection.each(function(model, index){
    			console.log(model.get('title'));
    		});
    	},
    	
    	render: function(){
    		// sort by status (done, active, todo)
    		// push 
    		var self = this;
    		
    		self.$el.html(_.template(this.template)({items: self.collection}));
    	}
    })
  
  }
});