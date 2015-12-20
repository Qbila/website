Template.signup.events({
  'change #signupFullName': function(event){
    Qbila.handleInvalidName(event.target);
  },

  'change #signupEmail': function(event){
    Qbila.handleInvalidEmail(event.target);
  },

  'submit form.a-signUpUser' : function(e){
    // TODO : we need to send all the code to the backend for crosscheck and preprocessing.
    e.preventDefault();

    var signUp = {
      fullName : e.target.signupFullName.value,
      email : e.target.signupEmail.value,
      password : e.target.signupPassword.value
    }

    if( Qbila.handleInvalidName(e.target.signupFullName) && Qbila.handleInvalidEmail(e.target.signupEmail) && Qbila.handleInvalidPassword(e.target.signupPassword) ) {
      Meteor.call('submitSignUpForm', signUp, function(error, result){
        if(result){
          Router.go("userStatus");
        } else if (error){
          if (error.reason == 'Email already exists.'){
            $(e.target.signupEmail).parents('.a-emailElement').removeClass('invalid has-error takenEmail');
            $(e.target.signupEmail).parents('.a-emailElement').addClass('has-error takenEmail');
          }
        }
      });
    }
  },
});
