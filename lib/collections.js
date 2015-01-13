

SystemListCREQ 	= new Mongo.Collection("server_list_creq");
ServerListSCOM	= new Mongo.Collection("server_list_scom");
ServerListESX   = new Mongo.Collection("server_list_esx");
AppsListCREQ    = new Mongo.Collection("apps_list_creq")



if (Meteor.isServer) {


  Meteor.startup(function () {

    // All values listed below are default
    collectionApi = new CollectionAPI({
      authToken: 'testtoken',              // Require this string to be passed in on each request
      apiPath: 'collectionapi',          // API path prefix
      standAlone: false,                 // Run as a stand-alone HTTP(S) server
      sslEnabled: false,                 // Disable/Enable SSL (stand-alone only)
      listenPort: 3005,                  // Port to listen to (stand-alone only)
      listenHost: undefined,             // Host to bind to (stand-alone only)
      privateKeyFile: 'privatekey.pem',  // SSL private key file (only used if SSL is enabled)
      certificateFile: 'certificate.pem' // SSL certificate key file (only used if SSL is enabled)
    });

    // Add the collection Players to the API "/players" path
    collectionApi.addCollection(SystemListCREQ, 'server_import_creq', {
      // All values listed below are default
      authToken: 'testtoken',                  // Require this string to be passed in on each request
      methods: ['POST','GET','PUT','DELETE'],  // Allow creating, reading, updating, and deleting
      before: {            // This methods, if defined, will be called before the POST/GET/PUT/DELETE actions are performed on the collection. If the function returns false the action will be canceled, if you return true the action will take place.
        POST: undefined,   // function(obj) {return true/false;},
        GET: undefined,    // function(collectionID, objs) {return true/false;},
        PUT: undefined,    //function(collectionID, obj, newValues) {return true/false;},
        DELETE: undefined, //function(collectionID, obj) {return true/false;}
      }
    });
    collectionApi.addCollection(ServerListSCOM, 'server_import_scom', {
      // All values listed below are default
      authToken: 'testtoken',                   // Require this string to be passed in on each request
      methods: ['POST','GET','PUT','DELETE'],  // Allow creating, reading, updating, and deleting
      before: {  // This methods, if defined, will be called before the POST/GET/PUT/DELETE actions are performed on the collection. If the function returns false the action will be canceled, if you return true the action will take place.
        POST: undefined,  // function(obj) {return true/false;},
        GET: undefined,  // function(collectionID, objs) {return true/false;},
        PUT: undefined,  //function(collectionID, obj, newValues) {return true/false;},
        DELETE: undefined,  //function(collectionID, obj) {return true/false;}
      }
    });
    collectionApi.addCollection(ServerListESX, 'server_import_esx', {
      // All values listed below are default
      authToken: 'testtoken',                   // Require this string to be passed in on each request
      methods: ['POST','GET','PUT','DELETE'],  // Allow creating, reading, updating, and deleting
      before: {  // This methods, if defined, will be called before the POST/GET/PUT/DELETE actions are performed on the collection. If the function returns false the action will be canceled, if you return true the action will take place.
        POST: undefined,  // function(obj) {return true/false;},
        GET: undefined,  // function(collectionID, objs) {return true/false;},
        PUT: undefined,  //function(collectionID, obj, newValues) {return true/false;},
        DELETE: undefined,  //function(collectionID, obj) {return true/false;}
      }
    });
    collectionApi.addCollection(AppsListCREQ, 'apps_import_creq', {
      // All values listed below are default
      authToken: 'testtoken',                   // Require this string to be passed in on each request
      methods: ['POST','GET','PUT','DELETE'],  // Allow creating, reading, updating, and deleting
      before: {  // This methods, if defined, will be called before the POST/GET/PUT/DELETE actions are performed on the collection. If the function returns false the action will be canceled, if you return true the action will take place.
        POST: undefined,  // function(obj) {return true/false;},
        GET: undefined,  // function(collectionID, objs) {return true/false;},
        PUT: undefined,  //function(collectionID, obj, newValues) {return true/false;},
        DELETE: undefined,  //function(collectionID, obj) {return true/false;}
      }
    });

    // Starts the API server
    collectionApi.start();
  });


  SystemListCREQ.before.insert(function (userId, doc) {
    doc.createdAt = new Date();
  });

  ServerListSCOM.before.insert(function (userId, doc) {
    doc.createdAt = new Date();
  });

  ServerListESX.before.insert(function (userId, doc) {
    doc.createdAt = new Date();
  });

  AppsListCREQ.before.insert(function (userId, doc) {
    doc.createdAt = new Date();
  });


}
