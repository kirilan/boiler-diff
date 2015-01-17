
Template.dashboard.rendered = function() {

};


Template.dashboard.events({

  'click .refresh-compliance': function() {
    event.preventDefault();
    Meteor.call('vcenter_compliance');

  }

})
