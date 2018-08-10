const { PORT, CLIENT_ROOT } = require("./constants");
const routes = require("./routes");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();

app.use(express.static(CLIENT_ROOT));
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
    console.log(CLIENT_ROOT);
});

app.post("/api/reportMatch", (req, res) => {
    routes.reportMatch(req, res);
});

app.post("/api/requestKash", (req, res) => {
    routes.requestKash(req, res);
});

app.post("/api/submitKash", (req, res) => {
    routes.submitKash(req, res);
});

app.post("/api/fetchTopKashes", (req, res) => {
    routes.fetchTopKashes(req, res);
});