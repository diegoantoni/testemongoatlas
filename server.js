const express = require("express");
const server = express();

const body_parser = require("body-parser");

//parse json (application/json content-type)
server.use(body_parser.json());

const port = 4000;

// db setup
const db = require("./db");
const dbName = "cad_cliente";
const collectionName = "clientes";

//db init
db.initialize(dbName, collectionName, function(dbCollection){
    // get all items
    dbCollection.find().toArray(function(err, result){
        if(err) throw err;
        console.log(result);
    });
    //db crud routes
}, function(err){
    throw(err);

});
server.listen(port, () =>{
    console.log(`Server listening at ${port}`);
});

