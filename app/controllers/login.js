import Controller from '@ember/controller';

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
     let gender = '';

     this.get('store').query('invitation', {filter: {name: ''}}).then(function(thaos) {
       console.log(thaos);
       let usernameAuthenticate = false;
       let i = 0;
       for(i = 0; i < thaos.content.length; ++i) {
         console.log(thaos.content[i]._data.username);
         if(username == thaos.content[i]._data.username && password == thaos.content[i]._data.password) {
           document.getElementById("thisGender").innerHTML = thaos.content[i]._data.gender;
           document.getElementById("thisUser").innerHTML = username;
           document.getElementById("thisPersonalityType").innerHTML = thaos.content[i]._data.personalitytype;
           document.getElementById("thisPersonalityTrait").innerHTML = thaos.content[i]._data.personalitytrait;
           console.log("correct user");
           usernameAuthenticate = true;
           break;
         }
       }
       if(usernameAuthenticate) {
         console.log(name);
         alert("Hi " + username);
         console.log()
       }
       else{
         console.log("in else");
         alert("Wrong username or password");
         this.refresh();
       }
     });
   }
 }
});
