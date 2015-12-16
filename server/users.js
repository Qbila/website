Meteor.publish("userData", function () {
  if (this.userId) {
    return Meteor.users.find(
      { _id: this.userId },
      {
        fields: {
          'services.twitter.profile_image_url': 1,
          'services.facebook.email' : 1
        }
      }
    );
  } else {
    this.ready();
  }
});

Activity.allow({
  insert: function(userId){
    //return !!userId;
    return true;
  }
});
