Template.governmentDesktopNavigation.events({
  'click .a-logout' : function(e) {
    e.preventDefault();

    Meteor.logout(function(err){
      if (err) {
        throw new Meteor.Error("Logout failed");
      }
      Session.set({'pageAlerts': 'loggedout'});
      Router.go('pageLogin');
    });
  }
})
