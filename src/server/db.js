const { MongoClient } = require("mongodb");
const { MONGO_URI } = require("./constants");
const Elo = require("elo-js");

module.exports = {
    retrieveKashes: (req, res) => {
        MongoClient.connect(MONGO_URI, (err, db) => {
            if (err) console.error(err);
            else {
                db.db().collection("kashes").aggregate([{ $sample: { size: 2 } }]).toArray((err, result) => {
                    if (err) console.error(err);
                    else {
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
            if (err) console.error(err);
            else {
                console.log(req.body);
                db.db().collection("kashes").insertOne({ name: req.body.name, score: 1000 });
                db.close();

                res.send("Added kash to database.");
            }
        });
    },
    reportMatch: (req, res) => {
        MongoClient.connect(MONGO_URI, (err, db) => {
            if (err) console.error(err);
            else {
                const query = { $or: [{name: req.body.winner}, {name: req.body.loser}] };

                db.db().collection("kashes").find(query).toArray((err, result) => {
                    if (err) console.error(err);
                    else {
                        let winnerScore = 0;
                        let loserScore = 0;

                        if (req.body.winner === result[0].name) {
                            winnerScore = result[0].score;
                            loserScore = result[1].score;
                        } else {
                            winnerScore = result[1].score;
                            loserScore = result[0].score;
                        }

                        const elo = new Elo();

                        const newWinScore = elo.ifWins(winnerScore, loserScore);
                        const newLoseScore = elo.ifLoses(loserScore, winnerScore);

                        db.db().collection("kashes").updateOne({ name: req.body.winner }, { $set: { score: newWinScore }});
                        db.db().collection("kashes").updateOne({ name: req.body.loser }, { $set: { score: newLoseScore }});
                        db.close();

                        res.send("Match data updated.");
                    }
                });
            }
        });
    },
    fetchTopKashes: (req, res) => {
        MongoClient.connect(MONGO_URI, (err, db) => {
            if (err) console.error(err);
            else {
                db.db().collection("kashes").find().sort({ score: -1 }).toArray((err, result) => {
                    if (err) console.err(err);
                    else {
                        res.setHeader("Content-Type", "application/json");
                        res.send(JSON.stringify(result));
                        db.close();
                    }
                });
            }
        });
    }
};