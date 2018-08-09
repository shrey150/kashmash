const { PORT, CLIENT_ROOT } = require("./constants");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(CLIENT_ROOT));
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
    console.
    console.log(CLIENT_ROOT);
});

app.post("/api/reportMatch", (req, res) => {
    console.log(req.body);
    res.send("Match data recieved.");
});