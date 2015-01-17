
Template.dashboard.rendered = function() {

};


Template.dashboard.events({

  'click .refresh-vmcompliance': function() {
    event.preventDefault();
    Meteor.call('vcenter_compliance');
  },
  'click .refresh-creqcompliance': function() {
    event.preventDefault();
    Meteor.call('creq_compliance');
  }

})
