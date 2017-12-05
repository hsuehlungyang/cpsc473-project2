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
   sendMessage() {
     alert(`Sending the following message: ${this.get('message')}`);
     this.set('responseMessage', `Thank you! Your message has been sent! Please wait for our response to ${this.get('emailAddress')}.`);
     this.set('emailAddress', '');
     this.set('message', '');
   }
 }
});
