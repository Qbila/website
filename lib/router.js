Router.configure({
  layoutTemplate: 'layout_home',
  loadingTemplate: 'loading',
  // waitOn: function(){ return Meteor.subscribe('newsFeed'); }
});

Router.map(function () {
  this.route('home', {
    path : '/'
  });
});
