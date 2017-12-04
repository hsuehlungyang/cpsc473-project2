import Controller from '@ember/controller';

export default Controller.extend({

    isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
    isDisabled: Ember.computed.not('isValid'),

    init() {
    this._super(...arguments);
    this.items = [
      { id: 1, name: 'Female' },
      { id: 2, name: 'Male' },
      { id: 3, name: 'Rather Not Say' }
    ];
    this.selectedItems = [];
  },

    actions: {
      valueHasChanged(item, isChecked) {
        if (isChecked) {
          this.get('selectedItems').addObject(item.name);
        }
        else {
          this.get('selectedItems').removeObject(item.name);
        }
      },

      saveUser() {
        const email = this.get('emailAddress');
        const username = this.get('name');
        const password = this.get('password');
        const gender = this.get('selectedItems');
        const personalitytype = this.get('personalitytype');

        const newInvitation = this.store.createRecord('invitation', { email: email, username: username, password: password, gender:gender, personalitytype:personalitytype });
        newInvitation.save();
      }
    }
  });
