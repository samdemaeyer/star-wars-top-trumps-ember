import DS from 'ember-data';

export default DS.Model.extend({
  url: DS.attr('string'),
  mass: DS.attr('string'),
  name: DS.attr('string'),
  edited: DS.attr('string'),
  gender: DS.attr('string'),
  height: DS.attr('string'),
  created: DS.attr('string'),
  homeworld: DS.attr('string'),
  eye_color: DS.attr('string'),
  hair_color: DS.attr('string'),
  birth_year: DS.attr('string'),
  skin_color: DS.attr('string')
});
