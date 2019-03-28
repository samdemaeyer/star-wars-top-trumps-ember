import Component from '@ember/component';

export default Component.extend({
  classNames: ['text-center'],
  actions: {
    shuffle() {
      this.get('shuffle')();
    },
  },
});
