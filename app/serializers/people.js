import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalize(modelClass, resourceHash, id) {
    resourceHash.mass = parseFloat(resourceHash.mass);
    let data = { id, type: modelClass.modelName, attributes: resourceHash };
    return { data };
  },

  normalizeSingleResponse(store, primaryModelClass, payload, id) {
    return this.normalize(primaryModelClass, payload, id);
  },

  normalizeArrayResponse(store, primaryModelClass, payload) {
    let data = payload.results.map(result => {
      let id = result.url.replace(/\//g, '').split('people').get('lastObject');
      let { data } = this.normalize(primaryModelClass, result, id);
      return data;
    });
    return { data };
  },
});
