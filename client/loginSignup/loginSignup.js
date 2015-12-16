Template.loginSignup.events({

  'submit form.a-loginUser' : function(e){
    e.preventDefault();

    loginEmail = e.target.loginEmail.value;
    loginPassword = e.target.loginPassword.value;

    Meteor.loginWithPassword(loginEmail, loginPassword, function(error){
      if(error){
        console.log(error.reason);
      } else {
        // Router.go("home");
        Router.go("userStatus");
      }
    });
  },

  'click .a-continueOrLogout' : function(){
    Router.go("userStatus");
  },

  'click form.a-signupUser a.a-signUp' : function(){
    var signUp = {
      fullName : e.target.signupFullName.value,
      email : e.target.signupEmail.value,
      password : e.target.signupPassword.value
    }
  },

  'submit form.a-signUpUser' : function(e){
    // TODO : we need to send all the code to the backend for crosscheck and preprocessing.
    e.preventDefault();

    var signUp = {
      fullName : e.target.signupFullName.value,
      email : e.target.signupEmail.value,
      password : e.target.signupPassword.value
    }

    Meteor.call('submitSignUpForm', signUp, function(error, result){
      console.log(error);
      console.log(result);
    });
  },

  'click .a-logout' : function(e) {
    e.stopPropagation();

    Meteor.logout(function(err){
      if (err) {
        throw new Meteor.Error("Logout failed");
      }
    });
  },

  'click .a-showLoginForm': function(){
    $('.a-loginSignup .a-signUpForm').hide();
    $('.a-loginSignup .a-loginForm').show();
  },

  'click .a-showSignupForm': function(){
    $('.a-loginSignup .a-signUpForm').show();
    $('.a-loginSignup .a-loginForm').hide();
  }
});
