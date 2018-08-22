const { MongoClient } = require("mongodb");
const { MONGO_URI } = require("../src/server/constants");

MongoClient.connect(MONGO_URI, (err, db) => {

    if (err) console.error(err);
    else {

        db.db().collection("kashes").updateMany({}, { $set: { score: 1000 } }).then(() => {

            db.close();
            console.log("Mongo database reset complete!");
            process.exit();
            
        });       
    }
});