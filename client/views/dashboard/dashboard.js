Template.dashboard.rendered = function() {

};

Template.dashboard.helpers({
  vcenter_hosts: function() {
    return ServerListESX.find({});
  },
  creq_hosts: function() {
    return SystemListCREQ.findOne(
      {DESCRIPTION: {$regex: this.Name, $options: 'i'}},
      {DECOMMISSIONED: 'N'}
    );
  }

})
