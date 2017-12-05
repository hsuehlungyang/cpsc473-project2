import Controller from '@ember/controller';

export default Controller.extend({
  // init() {
  //   this.filteredItems = this.store.query('invitation', {username: 'thao'})
  // }
  selectedItem: undefined,
     actions: {
         selectItem: function( item ) {
             this.set('selectedItem', item);
         },

         loadProfile() {
           const username = this.get('username');
           console.log(username);
         }
     }
});
