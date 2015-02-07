TabularTables = {};

Meteor.isClient && Template.registerHelper('TabularTables', TabularTables);

TabularTables.CREQ = new Tabular.Table({
  name: "CREQ",
  collection: SystemListCREQ ,
  createdRow: function( row, data, dataIndex ) {

    if (data.DECOMMISSIONED == "Y") {
      $(row).addClass( 'danger' );
    }
  },
  columns: [
{data: "DESCRIPTION", title: "System"},
{data: "SYSTEM_TYPE_DESC", title: "System Type"},
{data: "HS_FLAG_DESCRIPTION", title: "Entry Type"},
{data: "SYSTEM_PURPOSE", title: "System_Purpose"},
{data: "OPERATING_SYSTEM", title: "Operating System"},
{data: "DECOMMISSIONED", title: "Decom"},
{data: "DECOMMISSION_DATE", title: "Decom Date"},
{data: "VIRTUAL_FLAG", title: "Virtual"},
{data: "HARDWARE_STATUS", title: "HW Status"},
{data: "SERVER_SN", title: "Serial"},
{data: "DATA_CENTER_NAME", title: "DataCenter"}
]
});

TabularTables.apps = new Tabular.Table({
  name: "apps",
  collection: AppsListCREQ ,
  columns: [
{data: "DESCRIPTION", title: "System"},
{data: "ASSOCIATED_APPLICATION", title: "Associated Application"}
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
{data: "InstalledBy", title: "InstalledBy"}
]
});

TabularTables.VI = new Tabular.Table({
  name: "VI",
  collection: ServerListESX ,
  columns: [
{data: "Name", title: "Name"},
{data: "ProvisionedSpaceGB", title: "vStorGB",
  render: function (val,type,doc){
    return Math.ceil(parseFloat(val));
  }
},
{data: "NumCpu", title: "NumCpu"},
{data: "MemoryMB", title: "MemoryMB"},
{data: "Guest", title: "Guest"},
{data: "ResourcePool", title: "ResourcePool"}
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
{data: "HW_Compliance", title: "CREQ HW Compliance"},
{data: "SCOM_Compliance", title: "CREQ SCOM Compliance"},
]
});
