const path = require("path");

module.exports = {

    PORT: process.env.PORT || 1505,
    HOSTNAME: "0.0.0.0",
    CLIENT_ROOT: path.join(__dirname, "../client/build"),
    MONGO_URI: "mongodb://admin:babblekash12@ds117422.mlab.com:17422/kashmash"

};