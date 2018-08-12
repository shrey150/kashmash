const { MongoClient } = require("mongodb");
const { MONGO_URI } = require("../src/server/constants");

MongoClient.connect(MONGO_URI, (err, db) => {

    if (err) console.error(err);
    else {
        // setup is very basic, created with the intent
        // to build on in case more setup is necessary in the future
        db.db().createCollection("kashes");
        db.close();

        console.log("Mongo database set up complete!");
        process.exit();
    }

});