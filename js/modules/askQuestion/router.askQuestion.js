/** 
 * Router for AskQuestion Page.
 * Define the flow control here.
 */

define(
	[
	 	'underscore', 
	 	'backbone', 
	 	'backboneAssociations', 
	 	'modules/askQuestion/model.askQuestion', 
	 	'modules/askQuestion/view.askQuestion'
	 ], 
	 function(
		_,
		Backbone,
		Associations,
		ModuleModel, 
		ModuleView
	  ){

	// the router will only load the views.
	// views will load model and express them through templates.
	// routers will not load or work with models. 
	// views will trigger router through dom events. 
	// routers will render views based on the allowed access, flow scheme and url.
	
	var AskQuestion = Backbone.Router.extend({
		
		routes: {
			""						:   "addQuestionIndex",
			"Question/add"			:  	"addQuestion",
			"Question/edit"			: 	"editQuestion",
			"Question/personalize"	: 	"personalizeQuestion",
			"SignUp/fb"				: 	"signUpWithFacebook",
			"SignUp/mobile"			: 	"signUpWithMobile",
			"SignIn"				: 	"signInWithMobile",
			"Question/selectType"	: 	"selectQuestionType",
			"Doctor/select"			: 	"selectDoctor",
			"Doctor/pay"			: 	"payPrepaidDoctor",
			"User/patientDetails/add": 	"addPatientDetails",
			"User/relations/edit"	: 	"editUserRelations",
			"User/relations/add"	: 	"addUserRelations"
		},
		
		multiStepConfig : [
		   {
		     status: 'done',
		     title : {
		    	'done' : 'your question',
		    	'revision' : 'your question'
		     },
   	    	 backLinks : '<a>change question</a>',
   	    	 backLinkFunction : '',
   	    	 content: 'the question that is being asked here', // need to connect the Question model with this. on change of question, change content
   	    	 htmlTemplate : ''
		   },
		   {
		     status: 'active',
		     title : {
		       'active': 'sign up or sign in',
		       'toDo': 'sign up or sign in',
		       'done': 'your name',
		       'revision': ''
		     },
   	    	 backLinks : '',
   	    	 backLinkFunction : '',
   	    	 content: 'User Name', // connect user's name with here.
   	    	 htmlTemplate : ''
		   },
		   {
			 status: 'toDo',
			 title : {
				 'toDo' : 'choose your preferred question type',
				 'active' : 'choose your preferred question type',
				 'done' : 'question type'
			 },
			 backLinks : '',
   	    	 backLinkFunction : '',
   	    	 content: 'Your question type', // connect question type with here.
   	    	 htmlTemplate : ''
		   },
		   {
			 status: 'toDo',
			 title : {
				 'toDo' : 'additional details',
				 'active' : 'additional details',
				 'done' : 'additional details'
			 },
			 backLinks : '',
   	    	 backLinkFunction : '',
   	    	 content: 'Patient Details', // connect with the added details.
   	    	 htmlTemplate : ''
		   }
		   
		],
		
		pageView : {},
		
		pageModel: {},
		
		initialize: function(){
			var self = this;
			
			self.pageModel.Relative = new ModuleModel.Relative();
			self.pageModel.Doctor = new ModuleModel.Doctor({doctorId: 23});
			self.pageModel.Question = new ModuleModel.Question({doctor: self.pageModel.Doctor});
			self.pageModel.User = new ModuleModel.User();
			
			self.pageView.AskQuestion_Index = new ModuleView.AskQuestion({model: self.pageModel});
			
			// initiate the multistep
			self.pageView.MultiStep = new ModuleView.multiStepInterface();
			self.pageView.MultiStep.config = this.multiStepConfig;
			self.pageView.MultiStep.constructCollection();
			self.pageView.MultiStep.render();
		},
		
		stateAndConditions: function(){
			
		},
		
		/*
		pageControlFlow: function() {
			(shapeFlowVars.user.isLoggedIn) ? 
			    (shapeFlowVars.question.isExclusive) ? 
				    (!! shapeFlowVars.doctor.doctorId) ? 
					    (shapeFlowVars.doctor.isPaid) ? 
						    (shapeFlowVars.doctor.isPrePaid) ? 
						        this.goPrePaid()
						      :
						    	this.goPostPaid()
						  :
							this.noPayment()
					  :
					    this.selectDoctor() // the test case condition will be applied here.
				  :
				    openQuestion()
			  :
				return "Logged In";
	    },
		*/
		
		addQuestionIndex: function(){
			this.pageView.AskQuestion_Index.render();
		},
		
		editQuestion: function(){
			// if there is no question to edit, go to addQuestion
			alert("editQuestion");
		},
		
		personalizeQuestion: function(){
			// add personal details 
			alert("personalizeQuestion");
		},
		
		signUpWithFacebook: function(){
			alert("signUpWithFacebook");
		},
		
		signUpWithMobile: function(){
			alert("signUpWithMobile");
		},
		
		signInWithMobile: function(){
			alert("signInWithMobile");
		},
		
		selectQuestionType: function(){
			
			if (this.userLoggedIn()){
				// show question choice interface
			} else {
				// show 
			}
		},
		
		userLoggedIn: function(){
			// update the variable. use better way.
			return this.pageModel.User.get('isLoggedIn');
		},
		
		selectDoctor: function(){
			alert("selectDoctor");
		},
		
		addPatientDetails: function(){
			alert("addPatientDetails");
		},
		
		payPrepaidDoctor: function(){
			alert("payPrepaidDoctor");
		},
		
		editUserRelations: function(){
			alert("editUserRelations");
		}
	
	});
	
	return AskQuestion;

});

