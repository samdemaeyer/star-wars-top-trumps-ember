import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'https://swapi.co/api',
  headers: {
    'Accept': 'application/json'
  },
});
