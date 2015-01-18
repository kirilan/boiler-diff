Template.creq.rendered = function() {

};

Template.creq.helpers({
  settings: function () {
    return {
      collection: SystemListCREQ,
      rowsPerPage: 10,
      showFilter: true,
      fields: ['DESCRIPTION',
      'HS_FLAG_DESCRIPTION',
      'SYSTEM_TYPE_DESC',
      'SYSTEM_PURPOSE',
      'VIRTUAL_FLAG',
      'VALIDATED',
      'OPERATING_SYSTEM',
      'SERVER_SN',
      'HARDWARE_STATUS',
      'PRODUCT_TYPE',
      'CLASSIFICATION',
      'DATA_CENTER_NAME',
      'DECOMMISSIONED',
      'DECOMMISSION_DATE'],
      rowClass: function(item) {
        var qnt = item.DECOMMISSIONED;

        switch (qnt) {
          case 'Y':
            return 'danger';
              default:
                  return ''
                }
              }
    };
  }
});
