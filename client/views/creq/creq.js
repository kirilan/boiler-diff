

Template.creq.events({
  'click tr': function (event) {
    //get current row and set session values
    var dataTable = $(event.target).closest('table').DataTable();
    var rowData = dataTable.row(event.currentTarget).data();
    Session.set('selected_system',rowData.DESCRIPTION);
    Session.set('selected_system_type',rowData.SYSTEM_TYPE_DESC);
  }
});

Template.creq_apps.events({
  'click td': function (event) {
    //get current cell
    //TO DO ...
    var dataTable = $(event.target).closest('table').DataTable();
    var cellData = dataTable.cells(event.currentTarget).data();
    var cellIndexes = dataTable.cells(event.currentTarget).indexes();

  //  console.log(cellData[0]);
  //  console.log(cellIndexes[0].column);

    if ( (cellIndexes[0].column == 1) && (typeof cellData[0]!= "undefined") ) {
      console.log(cellData[0]);

    }

  }
});

Template.creq_apps.helpers({
  selector: function () { //return selector to limit apps view
    var selected = Session.get('selected_system');
    var selectedType = Session.get('selected_system_type');


    if (selectedType == 'Application' || selectedType == 'Domain') {
      return {ASSOCIATED_APPLICATION: selected};
    } else {
      return {DESCRIPTION: selected};
    }

  }
});
