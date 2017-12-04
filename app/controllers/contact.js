import Controller from '@ember/controller';

export default Controller.extend({
  emailAddress: '',
  message: '',

  isValidEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isValidMessage: Ember.computed.gte('message.length', 5),
  isValid: Ember.computed.and('isValidEmail', 'isValidMessage'),
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
