Meteor.methods({
  'vcenter_compliance': function(){

    VM_Compliance.remove({})

    ServerListESX.find().forEach(
      function (doc) {
      var creq =  SystemListCREQ.findOne({DESCRIPTION: {$regex: doc.Name, $options: 'i'}})
      if (!creq) {
        VM_Compliance.upsert(
            {
              //selector
              VMName: doc.Name
            },
          {
            //modifier
            $set:{  VMName: doc.Name,
                    CREQ_Compliance: 'no record found'
                  }
          }
        );
        }
      var creq =  ServerListSCOM.findOne({ComputerName: {$regex: doc.Name, $options: 'i'}})
      if (!creq) {
        VM_Compliance.upsert(
          {
              //selector
              VMName: doc.Name
          },
          {
              //modifier
              $set:{  VMName: doc.Name,
                      SCOM_Compliance: 'no record found'
                    }
          }
        );
      }

      }
    )
  },
  'creq_compliance': function(){
    CREQ_Compliance.remove({})
    SystemListCREQ.find().forEach(
      function (doc) {
          if (
              (doc.DECOMMISSIONED      === 'N' &&
              doc.VIRTUAL_FLAG        === 'N' &&
              doc.HARDWARE_STATUS     !== 'Active' &&
              doc.HS_FLAG_DESCRIPTION  == 'Server') ||
              (doc.DECOMMISSIONED      === 'Y' &&
              doc.VIRTUAL_FLAG        === 'N' &&
              doc.HARDWARE_STATUS     == 'Active' &&
              doc.HS_FLAG_DESCRIPTION  == 'Server')
              ) {
            
            CREQ_Compliance.upsert(
              {//selector
                DESCRIPTION: doc.DESCRIPTION
              },
              {//modifier
                $set:{  DESCRIPTION: doc.DESCRIPTION,
                        HW_Compliance:
                        'Status: ' + doc.HARDWARE_STATUS +
                        ' SN: ' + doc.SERVER_SN +
                        ' Decom: ' + doc.DECOMMISSIONED
                }
              }
            )
          }
      }
    )
  }
});
