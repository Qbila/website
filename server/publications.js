Meteor.publish('posts', function(){
  return Posts.find();
});

Meteor.publish('supports', function(){
  return Supports.find();
});

Meteor.publish('expressions', function(){
  return Expressions.find();
});

Meteor.publish('activity', function(){
  return Activity.find();
});
