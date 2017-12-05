import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
  gender: '',
  name: '',
  password: '',
  username: '',
  type: '',
  trait: '',


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
    this.set('gender', '');
  },

   authenticateUser() {

     const username = this.get('name');
     const password = this.get('password');

     this.get('store').query('invitation', {filter: {name: ''}}).then(function(thaos) {
       let usernameAuthenticate = false;
       let i = 0;
       for(i = 0; i < thaos.content.length; ++i) {
         if(username == thaos.content[i]._data.username && password == thaos.content[i]._data.password) {
           document.getElementById("thisGender").innerHTML = thaos.content[i]._data.gender;
           document.getElementById("thisUser").innerHTML = username;
           document.getElementById("thisPersonalityType").innerHTML = thaos.content[i]._data.personalitytype;
           document.getElementById("thisPersonalityTrait").innerHTML = thaos.content[i]._data.personalitytrait;
           usernameAuthenticate = true;
           break;
         }
       }
       if(usernameAuthenticate) {
         //alert("Hi " + username);
       }
       else{
         alert("Wrong username or password");
         this.refresh();
       }
     });
   }
 }
});
