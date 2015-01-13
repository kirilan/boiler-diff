Router.map(function() {

  this.route('home', {
    path: '/'
  });

  this.route('dashboard', {
    path: '/dashboard',
    waitOn: function() {
      return this.subscribe("items");
    },    
    onAfterAction: function() {
      SEO.set({
        title: 'Dashboard | ' + SEO.settings.title
      });
    }
  });

  this.route('creq', {
    path: '/creq',
    waitOn: function() {
      return this.subscribe("CREQList");
    },
    onAfterAction: function() {
      SEO.set({
        title: 'CREQ List | ' + SEO.settings.title
      });
    }
  });

  this.route('scom', {
    path: '/scom',
    waitOn: function() {
      return this.subscribe("SCOMList");
    },
    onAfterAction: function() {
      SEO.set({
        title: 'SCOM List | ' + SEO.settings.title
      });
    }
  });

  this.route('vi', {
    path: '/vi',
    waitOn: function() {
      return this.subscribe("VI");
    },
    onAfterAction: function() {
      SEO.set({
        title: 'VI List | ' + SEO.settings.title
      });
    }
  });

  this.route('profile', {
    path: '/profile',
    data: function() {
      return Meteor.user();
    }
  });

  this.route('notFound', {
    path: '*',
    where: 'server',
    action: function() {
      this.response.statusCode = 404;
      this.response.end(Handlebars.templates['404']());
    }
  });

});
