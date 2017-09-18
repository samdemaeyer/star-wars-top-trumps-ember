import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalizeSingleResponse(store, primaryModelClass, payload, id) {
    let  data = { id, type: primaryModelClass.modelName, attributes: payload };
    return { data };
  }
});
