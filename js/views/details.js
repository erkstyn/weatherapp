var DetailView = Backbone.View.extend({ 
  el: '#details',

  template: require('../../templates/details.hbs'),

  initialize: function () {
    this.listenTo(this.model, 'change', this.render);
    this.render();
  },

  render: function () {
    this.$el.html(this.template(this.model.get('currently')));
    return this;
  }

});

module.exports = DetailView;