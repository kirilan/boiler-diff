Template.dashboard.rendered = function() {

};

Template.dashboard.helpers({
  vi_hosts: function() {
    return ServerListESX.find({});
  },

  creq_hosts: function() {
    // We use this helper inside the {{#each posts}} loop, so the context
    // will be a post object. Thus, we can use this.authorId.
    return SystemListCREQ.findOne(this.Name1);
  }
})
