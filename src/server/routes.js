const fs = require("fs");
const path = require("path");

const fileUtils = require("../../lib/file_utils");
const { CLIENT_ROOT } = require("./constants");
const db = require("./db");

module.exports = {

    reportMatch: (req, res, file) => {
        console.log(req.body);
        res.send("Match data recieved.");
    },

    requestKash: (req, res) => {
        console.log(req.body);
        db.retrieveKashes(req, res);
    },

    submitKash: (req, res) => {
        console.log(req.body);
        db.submitKash(req, res);
    },

    fetchFile: (req, res, file) => {

        res.statusCode = 200;
        res.setHeader("Content-Type", fileUtils.contentType(file));
        fs.readFile(path.join(CLIENT_ROOT, file), (err, data) => {
            if (err) console.log(err);
            else res.end(data);
        });

    },

    notFound: (req, res) => {

        res.statusCode = 404;
        res.write("404: File not found.");
        return res.end();

    }
};