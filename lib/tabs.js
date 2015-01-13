TabularTables = {};

Meteor.isClient && Template.registerHelper('TabularTables', TabularTables);

TabularTables.CREQ = new Tabular.Table({
  name: "CREQ",
  collection: SystemListCREQ ,
  columns: [
{data: "DESCRIPTION", title: "DESCRIPTION"},
{data: "SYSTEM_TYPE_DESC", title: "SYSTEM TYPE"},
{data: "HS_FLAG_DESCRIPTION", title: "ENTRY TYPE"},
{data: "SYSTEM_PURPOSE", title: "SYSTEM PURPOSE"},
{data: "OPERATING_SYSTEM", title: "OPERATING SYSTEM"},
{data: "DECOMMISSIONED", title: "DECOMMISSIONED"},
{data: "DECOMMISSION_DATE", title: "DECOMMISSION DATE"},
{data: "VIRTUAL_FLAG", title: "VIRTUAL"},
{data: "HARDWARE_STATUS", title: "HW STATUS"},
{data: "SERVER_SN", title: "SERVER SN"},
{data: "MAINTENANCE_TYPE", title: "MAINTENANCE TYPE"},
{data: "DATA_CENTER_NAME", title: "DATA CENTER"},
{
  tmpl: Meteor.isClient && Template.CreqSystemsView
}
]
});
