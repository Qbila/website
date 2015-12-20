Template.pageLogin.events({

  'change #loginEmail': function(event){
    Qbila.handleInvalidEmail(event.target);
  },

  'submit form.a-loginUser' : function(e){
    // TODO : we need to send all the code to the backend for crosscheck and preprocessing.
    e.preventDefault();

    Meteor.loginWithPassword(e.target.loginEmail.value, e.target.loginPassword.value, function(error){
      if(error){
        console.log(error.reason);
      } else {
        // Router.go("home");
        Router.go("userStatus");
      }
    });
  },
});

Template.pageLogin.helpers({
  pageAlerts: function(){
    if (Session.get('pageAlerts')){
      switch(Session.get('pageAlerts')){
        case 'loggedout':
          return 'a-loggedout alert-info';
      }
    }
    return false;
  }
})
