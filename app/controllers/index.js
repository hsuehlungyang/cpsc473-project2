import Controller from '@ember/controller';

export default Controller.extend({

    isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
    isDisabled: Ember.computed.not('isValid'),

    actions: {

      saveUser() {
        const email = this.get('emailAddress');
        const username = this.get('name');
        const password = this.get('password');

        const newInvitation = this.store.createRecord('invitation', { email: email, username: username, password: password });
        newInvitation.save();
      }
    }
  });