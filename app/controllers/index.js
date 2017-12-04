import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({

    isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
    isDisabled: Ember.computed.not('isValid'),

    init() {
      this.genders = [
      { id: 1, name: 'Female' },
      { id: 2, name: 'Male' },
      { id: 3, name: 'Rather Not Say' }
    ];
    this.selectedGenders = [];

    this.personalitytypes = [
      { id: 1, name: 'Extrovert' },
      { id: 2, name: 'Introvert' },
      { id: 3, name: 'Ambivert' }
    ];
    this.selectedPersonalityTypes = [];
  },

    actions: {
      valueHasChangedGender(gender, isChecked) {
        if (isChecked) {
          this.get('selectedGenders').addObject(gender.name);
        }
        else {
          this.get('selectedGenders').removeObject(gender.name);
        }
      },

      valueHasChangedPersonType(personalitytype, isChecked) {
        if (isChecked) {
          this.get('selectedPersonalityTypes').addObject(personalitytype.name);
        }
        else {
          this.get('selectedPersonalityTypes').removeObject(personalitytype.name);
        }
      },

      saveUser() {
        const email = this.get('emailAddress');
        const username = this.get('name');
        const password = this.get('password');
        const gender = this.get('selectedGenders');
        const personalitytype = this.get('selectedPersonalityTypes');

        const newInvitation = this.store.createRecord('invitation', { email: email, username: username, password: password, gender:gender, personalitytype:personalitytype });
        newInvitation.save();
      }
    }
  });
