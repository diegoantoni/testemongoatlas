const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://diego:website123@cluster0-dwu3o.mongodb.net/test?retryWrites=true&w=majority";

function initialize(dbName, dbCollectionName, successCallback, failureCallback){
const client = new MongoClient(uri, { /*useNewUrlParser: true*/useUnifiedTopology: true });
client.connect( function (err, dbInstance){
   if(err){
       console.log(`Connection ERROR:${err}`);
       failureCallback(err);
   }else{
       const dbObject = dbInstance.db(dbName);
       const dbCollection = dbObject.collection(dbCollectionName);
       console.log("Connection Success");

       successCallback(dbCollection);
   }

});

}

module.exports = {
    initialize
};



