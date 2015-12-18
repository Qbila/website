
Router.configure({
  layoutTemplate: 'layout_home',
  loadingTemplate: 'loading',
  // waitOn: function(){ return Meteor.subscribe('newsFeed'); }
});

Router.map(function () {
  this.route('infoIndex', {
    path : '/',
    onBeforeAction : function(){
      document.title = 'Welcome to Qbila';
      this.next();
    }
  });

  this.route('signup', {
    path : '/signup',
    layoutTemplate : 'layout_loginSignup',
    onBeforeAction : function(){
      document.title = 'Sign up for Qbila';
      this.next();
    }
  });

  this.route('pageLogin', {
    path : '/login',
    layoutTemplate : 'layout_loginSignup',
    onBeforeAction : function(){
      document.title = 'Login in to Qbila';
      this.next();
    }
  });

  this.route('forgotPassword', {
    path : '/forgotPassword',
    layoutTemplate : 'layout_loginSignup',
    onBeforeAction : function(){
      document.title = 'Forgot Password? - Qbila';
      this.next();
    }
  });

  this.route('userStatus', {
    path : '/userStatus',
    layoutTemplate : 'welcomeUser',
    onBeforeAction : function(){
      document.title = 'Update Profile';
      this.next();
    }
  });

  this.route('home', {
    path : 'home/:id',
    onBeforeAction : function(){
      document.title = 'Welcome to Qbila';
      this.next();
    },
    layoutTemplate : 'homeLayout'
  });

  this.route('officalsLanding', {
    path: 'officalsLanding',
    layoutTemplate : 'officialDesktop'
  });

  this.route('postDetail', {
    path : '/post/:id',
    layoutTemplate : 'officialDesktop'
  });

  this.route('citizensInfo', {
    path : 'citizensInfo/:citizenId',
    onBeforeAction : function(){
      document.title = 'Welcome to Qbila';
      this.next();
    },
    layoutTemplate : 'officialDesktop'
  });

  this.route('supporters', {
    path : 'supporters/:postId',
    onBeforeAction : function(){
      document.title = 'Welcome to Qbila';
      this.next();
    },
    layoutTemplate : 'homeLayout'
  });

  this.route('post', {
    path : 'post/:id/focus/:focusOn',
    layoutTemplate : 'homeLayout',
    data : function(){
      return Posts.findOne({'_id': this.params.id});
    }
  });

  this.route('act', {
    path : 'act',
    onBeforeAction : function(){
      Template.contextTitle.helpers({
        contextTitle: 'Act',
        contextInfo: 'Actionable information for you'
      });

      document.title = 'Act - Actionable information for you - Qbila';

      this.next();
    },
    layoutTemplate : 'actLayout'
  });

  this.route('statusNImpact', {
    path : 'act/status',
    onBeforeAction : function(){
      Template.contextTitle.helpers({
        contextTitle: 'Act',
        contextInfo: 'Actionable information for you'
      });

      document.title = 'Status and Impact - Act - Qbila';

      this.next();
    },
    layoutTemplate : 'actLayout'
  });

  this.route('story', {
    path : '/story',
    layoutTemplate : 'homeLayout'
  });

  this.route('myRegion', {
    path : '/myRegion',
    layoutTemplate : 'homeLayout'
  });


  this.route('localIssues', {
    path : 'act/local',
    onBeforeAction : function(){
      Template.navigation.helpers({
        contextTitle: 'Local Issues',
        contextInfo: 'Priority issues around you'
      });

      document.title = 'Local Issues - Act - Qbila';

      this.next();
    },
    layoutTemplate : 'actLayout'
  });

  this.route('services', {
    path : 'act/services',
    onBeforeAction : function(){
      Template.navigation.helpers({
        contextTitle: 'Services',
        contextInfo: ''
      });

      document.title = 'Services - Act - Qbila';

      this.next();
    },
    layoutTemplate : 'actLayout'
  });


  this.route('know', {
    path : 'know',

    onBeforeAction : function(){
      Template.contextTitle.helpers({
        contextTitle: 'Know',
        contextInfo: 'Awareness of your locality'
      });

      document.title = 'Know - Awareness of your regions - Qbila';

      this.next();
    },
    layoutTemplate : 'knowLayout'
  });

  this.route('city', {
    path : 'know/city',

    onBeforeAction : function(){
      Template.contextTitle.helpers({
        contextTitle: 'City',
        contextInfo: 'About your city'
      });

      document.title = 'City - Qbila';

      this.next();
    },
    layoutTemplate : 'knowLayout'
  });

  this.route('org', {
    path : 'know/org',

    onBeforeAction : function(){
      Template.contextTitle.helpers({
        contextTitle: 'Organisation',
        contextInfo: 'Government Organisation'
      });

      document.title = 'Organisation - Qbila';

      this.next();
    },
    layoutTemplate : 'knowLayout'
  });

  this.route('aboutUser', {
    path : 'profile/about',

    onBeforeAction : function(){
      document.title = 'My Profile - Qbila';

      this.next();
    },
    layoutTemplate : 'profileLayout'
  });

  this.route('contributions', {
    path : 'profile/contributions',

    onBeforeAction : function(){
      document.title = 'My Contributions - Qbila';

      this.next();
    },
    layoutTemplate : 'profileLayout'
  });

  this.route('places', {
      path : 'profile/places',

      onBeforeAction : function(){
        document.title = 'My Contributions - Qbila';

        this.next();
      },
      layoutTemplate : 'profileLayout'
  });

  this.route('add', {
      path : '/add',

      onBeforeAction : function(){
        document.title = 'My Contributions - Qbila';

        this.next();
      },
      layoutTemplate : 'homeLayout'
  });

  this.route('addPlace', {
      path : 'profile/addPlace',

      onBeforeAction : function(){
        document.title = 'Add New Place - Qbila';

        this.next();
      },
      layoutTemplate : 'profileLayout'
  });

  this.route('serviceHistory', {
      path : 'profile/History',

      onBeforeAction : function(){
        document.title = 'Services History - Qbila';

        this.next();
      },
      layoutTemplate : 'profileLayout'
  });

});
