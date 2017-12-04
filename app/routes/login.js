import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
  session: Ember.inject.service(),
  beforeModel: function() {
    return this.get('session').fetch().catch(function() {});
  },
  actions: {
    signIn: function() {
      this.get('session').open('firebase', {
      provider: 'password',
      email: 'test@example.com',
      password: 'password1234'
  });
    },
    signOut: function() {
      this.get('session').close();
    }
  }
});
