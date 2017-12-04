import Component from '@ember/component';

export default Component.extend({
  size: 200,
  email: '',

  gravatarUrl: function() {
    var email = this.get('email'),
    size = this.get('size');

    return 'http://www.gravatar.com/avatar/' + window.md5(email) + '?s=' + size;
  }.property('email', 'size')
});
