Meteor.methods({
  signUpUser: function(){
    Accounts.createUser({
        email: signupEmail,
        password: signupPassword,
        profile: {
          name : signupFullName
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
  }
});
