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
{data: "createdAt", title: "createdAt"},
{
  tmpl: Meteor.isClient && Template.CreqSystemsView
}
]
});

TabularTables.SCOM = new Tabular.Table({
  name: "SCOM",
  collection: ServerListSCOM ,
  columns: [
{data: "Name", title: "Name"},
{data: "HealthState", title: "HealthState"},
{data: "ComputerName", title: "ComputerName"},
{data: "Domain", title: "Domain"},
{data: "IPAddress", title: "IPAddress"},
{data: "InstallTime", title: "InstallTime"},
{data: "InstalledBy", title: "InstalledBy"},
{data: "createdAt", title: "createdAt"},
{
  tmpl: Meteor.isClient && Template.ScomSystemsView
}
]
});

TabularTables.VI = new Tabular.Table({
  name: "VI",
  collection: ServerListESX ,
  columns: [
{data: "Name", title: "Name"},
{data: "ProvisionedSpaceGB", title: "ProvisionedSpaceGB"},
{data: "NumCpu", title: "NumCpu"},
{data: "MemoryMB", title: "MemoryMB"},
{data: "Guest", title: "Guest"},
{data: "ResourcePool", title: "ResourcePool"},
{data: "createdAt", title: "createdAt"},
{
  tmpl: Meteor.isClient && Template.VISystemsView
}
]
});


TabularTables.VI_Compliance = new Tabular.Table({
  name: "VI_Compliance",
  collection: VM_Compliance ,
  columns: [
    {data: "VMName", title: "VMName"},
    {data: "CREQ_Compliance", title: "CREQ Compliance"},
    {data: "SCOM_Compliance", title: "SCOM Compliance"}
  ]
});
