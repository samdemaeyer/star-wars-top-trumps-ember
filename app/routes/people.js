import Ember from 'ember';
import getRandomInt from 'star-wars-top-trumps/utils/random-int';

export default Ember.Route.extend({
  model() {
    let randNr = getRandomInt(0, 87);
    return this.store.findRecord('people', randNr);
  }
});
