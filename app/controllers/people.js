import Ember from 'ember';

const { Controller, computed } = Ember;

export default Controller.extend({
  leftWinCount: 0,
  rightWinCount: 0,

  // CP's
  people: computed('model', {
    get() {
      return this._pickRandomPeople();
    },
    set(_, val) {
      return val;
    }
  }),

  actions: {
    shuffle() {
      this.set('people', this._pickRandomPeople());
    }
  },

  // Methods
  _pickRandomPeople() {
    let randomisedPeople = this.get('model').toArray().sort(() => 0.5 - Math.random());
    return this._setWinnerAndScore([randomisedPeople.get('firstObject'), randomisedPeople.get('lastObject')]);
  },

  _setWinnerAndScore(people) {
    if (people[0].get('mass') === people[1].get('mass')) {
      this.incrementProperty('leftWinCount');
      this.incrementProperty('rightWinCount');
      people.forEach(p => p.set('hasBiggerMass', true));
    } else {
      people.forEach(p => p.set('hasBiggerMass', false));
      let winProperties = ['leftWinCount', 'rightWinCount'];
      let winPosition = people[0].get('mass') > people[1].get('mass') ? 0 : 1;
      this.incrementProperty(winProperties[winPosition]);
      people[winPosition].set('hasBiggerMass', true);
    }
    return people;
  }
});
