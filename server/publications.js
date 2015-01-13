Meteor.publishComposite("items", function() {
  return {
    find: function() {
      return ServerListESX.find({});
    }
     ,
     children: [
       {
         find: function(item) {
           return SystemListCREQ.find(
           {DESCRIPTION: {$regex: item.Name, $options: 'i'}}
           );
         }
       }
     ]
  }
});


Meteor.publishComposite("CREQList", function() {
  return {
    find: function() {
      return SystemListCREQ.find({});
    }
    // ,
    // children: [
    //   {
    //     find: function(item) {
    //       return [];
    //     }
    //   }
    // ]
  }
});

Meteor.publishComposite("SCOMList", function() {
  return {
    find: function() {
      return ServerListSCOM.find({});
    }
    // ,
    // children: [
    //   {
    //     find: function(item) {
    //       return [];
    //     }
    //   }
    // ]
  }
});

Meteor.publishComposite("VI", function() {
  return {
    find: function() {
      return ServerListESX.find({});
    }
    // ,
    // children: [
    //   {
    //     find: function(item) {
    //       return [];
    //     }
    //   }
    // ]
  }
});
