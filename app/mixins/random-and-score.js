import Ember from 'ember';

const { computed } = Ember;

export default Ember.Mixin.create({
  leftWinCount: 0,
  rightWinCount: 0,

  // CP's
  collection: computed('model', {
    get() {
      return this._pickRandomFromCollection(this.get('compareAttr'));
    },
    set(_, val) {
      return val;
    }
  }),

  actions: {
    shuffle() {
      this.set('collection', this._pickRandomFromCollection(this.get('compareAttr')));
    }
  },

  // Methods
  _pickRandomFromCollection(compareAttr) {
    let randomisedPeople = this.get('model').toArray().sort(() => 0.5 - Math.random());
    return this._setWinnerAndScore([randomisedPeople.get('firstObject'), randomisedPeople.get('lastObject')], compareAttr);
  },

  _setWinnerAndScore(collection, compareAttr) {
    if (collection[0].get(compareAttr) === collection[1].get(compareAttr)) {
      this.incrementProperty('leftWinCount');
      this.incrementProperty('rightWinCount');
      collection.forEach(p => p.set('hasBiggerMass', true));
    } else {
      collection.forEach(p => p.set('hasBiggerMass', false));
      let winProperties = ['leftWinCount', 'rightWinCount'];
      let winPosition = collection[0].get(compareAttr) > collection[1].get(compareAttr) ? 0 : 1;
      this.incrementProperty(winProperties[winPosition]);
      collection[winPosition].set('hasBiggerMass', true);
    }
    return collection;
  }
});
