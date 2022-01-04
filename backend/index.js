const express = require("express");
const bodyParser = require("body-parser");

const router = require("./controllers/artpage.controller");

const app = express();
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log("application now running on port 3000");
});

app.use('/resources', router);
