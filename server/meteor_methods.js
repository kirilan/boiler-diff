Meteor.methods({
  'vcenter_compliance': function(){
    VM_Compliance.remove({})
    ServerListESX.find().forEach(
      function (doc) {
      var creq =  SystemListCREQ.findOne({DESCRIPTION: {$regex: doc.Name, $options: 'i'}})
      if (!creq) {console.log(doc.Name,' no CREQ entry');
        VM_Compliance.upsert(
            {
              //selector
              VMName: doc.Name
            },
          {
            //modifier
            $set:{  VMName: doc.Name,
                    CREQ_Compliance: 'failed'
                  }
          }
        );
        }
      var creq =  ServerListSCOM.findOne({ComputerName: {$regex: doc.Name, $options: 'i'}})
      if (!creq) {console.log(doc.Name,' no SCOM entry');
        VM_Compliance.upsert(
          {
              //selector
              VMName: doc.Name
          },
          {
              //modifier
              $set:{  VMName: doc.Name,
                      SCOM_Compliance: 'failed'
                    }
          }
        );
      }

      }
    )

  }
});
