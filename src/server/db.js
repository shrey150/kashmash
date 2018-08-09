const { MongoClient } = require("mongodb");
const { MONGO_URI } = require("./constants");

module.exports = {
    retrieveKashes: (req, res) => {
        MongoClient.connect(MONGO_URI, (err, db) => {
            if (err) {
                console.error(`Error connecting to MongoDB: ${err}`);
            } else {
                console.log("MongoDB connection successful");

                db.db().collection("kashes").aggregate([{ $sample: { size: 2 } }]).toArray((err, result) => {
                    if (err) console.error(err);
                    else {
                        console.log(result);
                        res.setHeader('Content-Type', 'application/json');
                        res.send(JSON.stringify(result));
                    }
                });

                db.close();    
            }
        });
    },
    submitKash: (req, res) => {
        MongoClient.connect(MONGO_URI, (err, db) => {
            if (err) {
                console.error(`Error connecting to MongoDB: ${err}`);
            } else {
                console.log("MongoDB connection successful");

                db.db().collection("kashes").insertOne({ name: req.body.name, score: 100 });
                res.send("Added kash to database.");
            }
        });
    }
};