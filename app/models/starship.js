import DS from 'ember-data';

export default DS.Model.extend({
  url: DS.attr('string'),
  MGLT: DS.attr('string'),
  crew: DS.attr('number'),
  name: DS.attr('string'),
  model: DS.attr('string'),
  length: DS.attr('string'),
  passengers: DS.attr('string'),
  consumables: DS.attr('string'),
  manufacturer: DS.attr('string'),
  starship_class: DS.attr('string'),
  cargo_capacity: DS.attr('string'),
  cost_in_credits: DS.attr('string'),
  hyperdrive_rating: DS.attr('string'),
  max_atmosphering_speed: DS.attr('string')
});
