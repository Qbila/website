
define(
  [ 'jquery',
	'underscore',
	'backbone',
	'backboneAssociations'], 
  function ($, _, Backbone, Associations) {
  
  "use strict";
  
  /** User Model, to be populated by login data */
  
  var User = Backbone.AssociatedModel.extend({
	  
	  relations: [
	     {
	    	 type: Backbone.Many, // nature of relation
	    	 key: 'relatives', // attribute of User
	    	 relatedModel: function(){
	    		 return Relative;
	    	 }
	     },
	     {
	    	 type: Backbone.One,
	    	 key: 'question',
	    	 relatedModel: function(){
	    		 return Question;
	    	 }
	     }
	  ],
	  
	  defaults: {
		  isLoggedIn: false,
		  email: '',
		  /* isTestSubject: to conduct any business test in this case. TODO : create object if there are multiple testing scenarios */
		  isTestSubject: false,  
		  firstName: '',
		  lastName: '',
		  ageYears: '',
		  ageMonths: '',
		  gender: '',
		  medicalInfo: {
			height: '',
			weight: ''
		  }
	  }
	  
	  
  });
  
  // relative of user model (to generate a collection from this one)
  var Relative = Backbone.AssociatedModel.extend({
	  
	  defaults:{
		  firstName: '',
		  lastName: '',
		  ageYears: '',
		  ageMonths: '',
		  gender: '',
		  medicalInfo: {
			  height: '',
			  weight: ''
		  }
	  }
  
  });
  
  // the question being asked on the page.
  var Question = Backbone.AssociatedModel.extend({
	  
	  relations: [
		  {
			  type: Backbone.One,
			  key: 'doctor',
			  relatedModel: function(){
				  return Doctor;
			  }
		  }
	  ],
	  
	  defaults: {
		  text: '',
		  isExclusive: false,
		  isResolved: false,
		  doctor: null
	  }
  
  });
 
  // about the doctor selected to answer the question. 
  var Doctor = Backbone.AssociatedModel.extend({
	  /*
	  relations: [
	      {
	    	  type: Backbone.One,
	    	  key: 'isAnswering',
	    	  relatedModel: Question
	      }
	  ],
	  */
	  defaults: {
		doctorId: '',
		isPaid: true,
		isPrePaid: false
	  }
  
  });
  
  return {
	  'User': User,
	  'Question': Question,
	  'Doctor': Doctor,
	  'Relative': Relative
  }
});