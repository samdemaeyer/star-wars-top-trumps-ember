import Normalize from 'star-wars-top-trumps/serializers/normalize';

export default Normalize.extend({
  modelName: 'people',
  floatAttr: 'mass'
});
