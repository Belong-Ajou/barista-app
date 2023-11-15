"use strict";

const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));

const home = require("./src/routes");
app.use("/", home);

module.exports = app;