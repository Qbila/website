var Qbila = {};

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
};

Qbila.passwordStrengthScore = function(password){
  return ( zxcvbn(password).score );
};

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
};

Qbila.handleInvalidEmail = function(emailElement){
  var validEmail = Qbila.validateEmail(emailElement.value);

  $(emailElement).parents('.a-emailElement').removeClass('notTakenEmail invalid has-error takenEmail');

  if( validEmail ){

    // this is not working :(
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
};
