TabularTables = {};

Meteor.isClient && Template.registerHelper('TabularTables', TabularTables);

TabularTables.CREQ = new Tabular.Table({
  name: "CREQ",
  collection: SystemListCREQ ,
  columns: [
{data: "DESCRIPTION", title: "Description"},
{data: "SYSTEM_TYPE_DESC", title: "System Type"},
{data: "HS_FLAG_DESCRIPTION", title: "Entry Type"},
{data: "SYSTEM_PURPOSE", title: "System Purpose"},
{data: "OPERATING_SYSTEM", title: "OS"},
{data: "DECOMMISSIONED", title: "Deco"},
{data: "DECOMMISSION_DATE", title: "Deco Date"},
{data: "VIRTUAL_FLAG", title: "Virtual"},
{data: "HARDWARE_STATUS", title: "HW Status"},
{data: "SERVER_SN", title: "Server SN"},
{data: "MAINTENANCE_TYPE", title: "Maint Type"},
{data: "DATA_CENTER_NAME", title: "Data Center"},
{data: "createdAt", title: "createdAt"}
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
{data: "createdAt", title: "createdAt"}
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
{data: "createdAt", title: "createdAt"}
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


TabularTables.CREQ_Compliance = new Tabular.Table({
  name: "CREQ_Compliance",
  collection: CREQ_Compliance ,
  columns: [
{data: "DESCRIPTION", title: "DESCRIPTION"},
{data: "HW_Compliance", title: "CREQ HW_Compliance"}
]
});
