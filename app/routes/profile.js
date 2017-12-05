import Route from '@ember/routing/route';

export default Route.extend({
  model: function() {
    return this.store.findAll('invitation');
  },
  setupController: function(controller, model){
  this._super(controller, model);
  controller.set('selectedItem', model.get('lastObject'));
}

});
