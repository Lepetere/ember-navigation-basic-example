var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {

  this.route('component-test');
  this.route('helper-test');
  
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

export default Router;