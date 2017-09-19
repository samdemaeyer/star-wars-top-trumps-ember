import Ember from 'ember';
import RandomAndScore from 'star-wars-top-trumps/mixins/random-and-score';

const { Controller } = Ember;

export default Controller.extend(RandomAndScore, {
  compareAttr: 'crew'
});
