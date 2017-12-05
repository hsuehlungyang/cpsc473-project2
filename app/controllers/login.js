import Controller from '@ember/controller';

export default Controller.extend({
  name: '',
  password: '',

  isEmptyName: Ember.computed.empty('name'),
  isValidName: Ember.computed.not('isEmptyName'),
  isEmptyPassword: Ember.computed.empty('password'),
  isValidPassword: Ember.computed.not('isEmptyPassword'),
  isValid: Ember.computed.and('isValidName', 'isValidPassword'),
  isDisabled: Ember.computed.not('isValid'),

  actions: {
   login() {
     this.set('name', '');
     this.set('password', '');
   }
 }
});
