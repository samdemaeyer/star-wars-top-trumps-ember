import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('/star-wars-top-trumps', { path: '/*path' });
  this.route('index', { path: '' });
  this.route('people');
  this.route('starships');
});

export default Router;
