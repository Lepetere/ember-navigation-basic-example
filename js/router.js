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