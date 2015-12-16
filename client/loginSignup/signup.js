Template.signup.events({
  'change #signupFullName': function(event){
    //var name = event.target.value.trim();

    Qbila.handleInvalidName(event.target);
  },

  'change #signupEmail': function(event){
    var email = event.target.value;

    Qbila.handleInvalidEmail(event.target);
  },

  'change #signupPassword, keypress #signupPassword': function(event){
    //var password = event.target.value;
    //var score = Qbila.passwordStrengthScore(event.target.value);

    Qbila.handleInvalidPassword(event.target);
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
      console.log('qwerty')
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

    console.log('zxcv');
  },
});

Qbila.displayError = function(){
  console.log('yeah');
  return true;
};

Qbila.validateName = function(name){
  if( validator.isNull( name ) ) {
    event.target.value = "";
    Qbila.displayError("What is your name?", event.target.id, 'RED');
    return false;
  }

  var returnVal = true;

  _.each(name.split(' '), function(value, key, list){
    returnVal &= validator.isAlpha(value);
  });

  return returnVal;
};

Qbila.validateEmail = function(email){
  return validator.isEmail(email);
}

Qbila.passwordStrengthScore = function(password){
  return ( zxcvbn(password).score );
}

Qbila.handleInvalidPassword = function(passwordElement){
  $(passwordElement)
    .parents('.a-passwordElement')
    .removeClass('has-error has-success a-passwordStrength-0 a-passwordStrength-1 a-passwordStrength-2 a-passwordStrength-3 a-passwordStrength-4 invalid');

  if (passwordElement.value.length < 6){
    $(passwordElement).parents('.a-passwordElement').addClass('invalid has-error');
    return false;
  }

  var score = Qbila.passwordStrengthScore(passwordElement.value);

  $(passwordElement).parents('.a-passwordElement').addClass('a-passwordStrength-'+score);

  if (score == 0){
    $(passwordElement).parents('.a-passwordElement').addClass('has-error');
    return false;
  }

  return true;
};

Qbila.handleInvalidName = function(nameElement) {
  var name = Qbila.validateName(nameElement.value);

  $(nameElement).parents('.a-nameElement').removeClass('invalid has-error takenEmail');

  if(!name){
    $(nameElement).parents('.a-nameElement').addClass('invalid has-error');
    return false;
  }
  return true;
}

Qbila.handleInvalidEmail = function(emailElement){
  var validEmail = Qbila.validateEmail(emailElement.value);

  $(emailElement).parents('.a-emailElement').removeClass('invalid has-error takenEmail');

  if( validEmail ){
    if ( Meteor.call('emailRegisteredOrNot', emailElement.value) ) {
      $(emailElement).parents('.a-emailElement').addClass('takenEmail has-error');
      return false;
    } else {
      return true;
    }
  } else {
    $(emailElement).parents('.a-emailElement').addClass('invalid has-error');
    return false;
  }
}
