const http = require("http");
const { PORT, HOSTNAME } = require("./constants");
const routes = require("./routes");
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

app.use(express.static(path.join(__dirname, "../client/build")));
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

app.post("/api/reportMatch", (req, res) => {

    console.log(req.body);

    res.send("Match data recieved.");
});

//---------------------------------------------------------------------------

/*

const server = http.createServer((req, res) => {

    const { url, method } = req;

    if (method === "GET") {
        switch (url) {
            case "/":
                return routes.fetchFile(req, res, "index.html");

            case "/index.js":
                return routes.fetchFile(req, res, "index.js");

            case "/index.css":
                return routes.fetchFile(req, res, "index.css");

            case "/submit":
                return routes.fetchFile(req, res, "submit.html");
    
            default:
                return routes.notFound(req, res);
        }
    }

});

*/

/*

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server started on port ${PORT}`);
})

*/