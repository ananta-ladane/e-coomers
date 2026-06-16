
const express = require("express");
const app = express();

const router = require("./router/router");
const bodyparser = require("body-parser");
const cors = require("cors");

app.use(cors())

app.use(express.json());

app.use(bodyparser.urlencoded({ extended: true }));
app.use(router);

app.listen(5000)

