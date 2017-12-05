import Route from '@ember/routing/route';

export default Route.extend({
  actions: {

    saveUser() {
      const gender = this.get('gender');

      const newInvitation = this.store.createRecord('invitation', { gender: gender });
      newInvitation.save();
    }
  }
});
