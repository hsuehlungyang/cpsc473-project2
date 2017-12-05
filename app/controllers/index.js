import Controller from '@ember/controller';

export default Controller.extend({
    password: '',
    confirmPassword: '',
    emailAddress: '',

    isValidEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
    isMatchedPassword: Ember.computed('password', 'confirmPassword', function() {
      return this.get('password') === this.get('confirmPassword');
    }),
    isValid: Ember.computed.and('isValidEmail', 'isMatchedPassword'),
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

    this.personalitytraits = [
      { id: 1, name: 'Adventurous' },
      { id: 2, name: 'Ambitious' },
      { id: 3, name: 'Bubbly' },
      { id: 4, name: 'Charistmatic' },
      { id: 5, name: 'Clever' },
      { id: 6, name: 'Compassionate' },
      { id: 7, name: 'Confident' },
      { id: 8, name: 'Considerate' },
      { id: 10, name: 'Detail-Oriented' },
      { id: 11, name: 'Easy-Going' },
      { id: 12, name: 'Energetic' },
      { id: 13, name: 'Generous' },
      { id: 14, name: 'Humble' },
      { id: 15, name: 'Impatient' },
      { id: 16, name: 'Independent' },
      { id: 17, name: 'Loyal' },
      { id: 18, name: 'Observant' },
      { id: 19, name: 'Open-Minded' },
      { id: 20, name: 'Optimistic' },
      { id: 21, name: 'Organized' },
      { id: 22, name: 'Passionate' },
      { id: 23, name: 'Patient' },
      { id: 24, name: 'Perfectionist' },
      { id: 25, name: 'Resourceful' },
      { id: 26, name: 'Romantic' },
      { id: 27, name: 'Suave' },
      { id: 28, name: 'Sweet' },
      { id: 29, name: 'Witty' }
    ];
    this.selectedPersonalityTraits = [];
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

      valueHasChangedPersonTrait(personalitytrait, isChecked) {
        if (isChecked) {
          this.get('selectedPersonalityTraits').addObject(personalitytrait.name);
        }
        else {
          this.get('selectedPersonalityTraits').removeObject(personalitytrait.name);
        }
      },

      saveUser() {
        const email = this.get('emailAddress');
        const username = this.get('name');
        const password = this.get('password');
        const gender = this.get('selectedGenders');
        const personalitytype = this.get('selectedPersonalityTypes');
        const personalitytrait = this.get('selectedPersonalityTraits');

        //alert(`Adding new user to our system: ${this.get('name')}`);
        const newInvitation = this.store.createRecord('invitation', { email: email, username: username, password: password, gender:gender, personalitytype:personalitytype, personalitytrait:personalitytrait });
        this.get('store').query('invitation', {filter: {name: 'thao'}}).then(function(thaos) {
          console.log(thaos);
          let usernameTaken = false;
          let i = 0;
          for(i = 0; i < thaos.content.length; ++i) {
            console.log(thaos.content[i]._data.username);
            if(username == thaos.content[i]._data.username) {
              alert("Username taken");
              usernameTaken = true;
              break;
            }
          }
          if(!usernameTaken) {
            alert("Hi " + username);
          }
          else{
            //this.transitionToRoute('index');
          }
        newInvitation.save();
        this.set('responseMessage', `Thank you! We've just saved your profile.`);
        this.set('emailAddress', '');
        this.set('name', '');
        this.set('password', '');
        this.set('confirmPassword', '');
        });
      }
    }
  });
