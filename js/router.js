App.Router.map(function() {

  this.resource('main-app-layout', { path: '/'});
  
  this.resource('first-section', function () {
  	this.route('part-1');
  	this.route('part-2');
  	this.route('part-3');
  });

  this.resource('another-section', function () {
  	this.route('part-1');
  	this.route('part-2');
  	this.route('part-3');
  });

  this.resource('about');
});

App.FirstSectionRoute = Ember.Route.extend({
  model: function () {},
  renderTemplate: function() {
    this.render('first-section', {
      into: 'main-app-layout',
      outlet: 'main-content'
    });
  }
});

App.AnotherSectionRoute = Ember.Route.extend({
  model: function () {},
  renderTemplate: function() {
    this.render('another-section', {
      into: 'main-app-layout',
      outlet: 'main-content'
    });
  }
});

App.AboutRoute = Ember.Route.extend({
  model: function () {},
  renderTemplate: function() {
    this.render('about', {
      into: 'main-app-layout',
      outlet: 'main-content'
    });
  }
});