Template.creq.rendered = function() {

};

Template.creq_main.events({
  'click tr': function (event) {
    //get current row and set session values
    var dataTable = $(event.target).closest('table').DataTable();
    var rowData = dataTable.row(event.currentTarget).data();
    Session.set('selected_system',rowData.DESCRIPTION);
    Session.set('selected_main',rowData.DESCRIPTION);
    Session.set('selected_system_type',rowData.SYSTEM_TYPE_DESC);
  },
  'click .expand': function () {
    Session.set('selected_main',undefined)
  }
});

Template.creq_main.helpers({
  selector: function () { //return selector to limit apps view
    var selected = Session.get('selected_main');
    if (selected) {
      return {DESCRIPTION: selected};
    }

  }
});

Template.creq_apps.events({
  'click td': function (event) {
    //get current cell
    //TO DO ...
    var dataTable = $(event.target).closest('table').DataTable();
    var cellData = dataTable.cells(event.currentTarget).data();
    var cellIndexes = dataTable.cells(event.currentTarget).indexes();

    if ( (cellIndexes[0].column == 1) && (typeof cellData[0]!= "undefined") ) {
      Session.set('selected_main',cellData[0]);
      Session.set('selected_system',cellData[0]);
      Session.set('selected_system_type','Application');

    }

  },
  'click tr': function (event) {
    //get current row and set session values
    var dataTable = $(event.target).closest('table').DataTable();
    var rowData = dataTable.row(event.currentTarget).data();
    Session.set('selected_system',rowData.DESCRIPTION);
    Session.set('selected_system_type',rowData.SYSTEM_TYPE_DESC);
  },
});

Template.creq_apps.helpers({
  selector: function () { //return selector to limit apps view
    var selected = Session.get('selected_system');
    var selectedType = Session.get('selected_system_type');


    if (selectedType == 'Application' ||
      selectedType == 'Domain' ||
      selectedType == 'Application (IT Tools/Non end-user application)'
      ) {
      return {ASSOCIATED_APPLICATION: selected};
    } else {
      return {DESCRIPTION: selected};
    }

  }
});
