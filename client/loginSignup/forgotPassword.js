Template.forgotPassword.events({
  'submit form.a-forgotPasswordForm': function (e) {
    e.preventDefault();

    var forgotPassword = {
      email : e.target.forgotPasswordEmail.value
    };

    console.log(forgotPassword);

    if( Qbila.handleInvalidEmail(e.target.forgotPasswordEmail) ) {

      console.log(Meteor.call('emailRegisteredOrNot', e.target.forgotPasswordEmail.value));

      console.log(e.target.forgotPasswordEmail.value);

      if ( Meteor.call('emailRegisteredOrNot', e.target.forgotPasswordEmail.value) ) {
        Meteor.call('sendForgotPasswordMail', e.target.forgotPasswordEmail.value);
        return true;
      } else {
        $(e.target.forgotPasswordEmail).parents('.a-emailElement').addClass('notTakenEmail has-error');
        return false;
      }

    }
  },

  'change #forgotPasswordEmail': function(event){
    Qbila.handleInvalidEmail(event.target);
  }
});
