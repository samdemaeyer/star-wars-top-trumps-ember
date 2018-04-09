import Controller from '@ember/controller';
import RandomAndScore from 'star-wars-top-trumps/mixins/random-and-score';

export default Controller.extend(RandomAndScore, {
  compareAttr: 'crew'
});
