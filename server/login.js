Meteor.methods({
  submitSignUpForm: function(signUp){

    if( Validator.isEmail(signUp.email) ) {
      return Accounts.createUser({email: signUp.email, password: signUp.password, profile: {name : signUp.fullName}});
    } else {
      return false;
    }
  },


  validateEmail: function (email) {
    // var re = [a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?;
    // return re.test(email);
  },

  signUpUser: function(signUp){
    Accounts.createUser({
        email: signUp.email,
        password: signUp.password,
        profile: {
          name : signUp.fullName
        }
      },
      function(error){
        if(error){
          console.log(error.reason);
        } else {
          // Router.go("home");
        }
      }
    );

  },

  emailRegisteredOrNot: function(email){
    return Accounts.findUserByEmail(email);
  },

  sendForgotPasswordMail: function(email) {
    // send email
    return true;
  }
});
