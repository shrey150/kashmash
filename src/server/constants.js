const path = require("path");

module.exports = {

    PORT: process.env.PORT || 1505,
    HOSTNAME: "0.0.0.0",
    CLIENT_ROOT: path.join(__dirname, "../client/build"),
    MONGO_URI: process.env.MONGO_URI

};