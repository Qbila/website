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
      }
    });
  },

  'submit form.a-signUpUser' : function(e){
    e.preventDefault();

    signupFullName = e.target.signupFullName.value;
    signupEmail = e.target.signupEmail.value;
    signupPassword = e.target.signupPassword.value;

    
  },

  'click .a-loginWithGooglePlus' : function(){
    console.log('g+');
  },

  'click .a-loginWithFacebook' : function(event) {
    Meteor.loginWithFacebook({}, function(err){
      if (err) {
        throw new Meteor.Error("Facebook login failed");
      }
    });
  },

  'click .a-loginWithFacebook' : function(event) {
    Meteor.loginWithFacebook({}, function(err){
      if (err) {
        throw new Meteor.Error("Facebook login failed");
      }
    });
  },

  'click .a-loginWithTwitter' : function(event) {
    Meteor.loginWithTwitter({}, function(err){
      if (err) {
        throw new Meteor.Error("Twitter login failed");
      }
    });
  },

  'click .a-logout' : function(event) {
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
