const express = require("express");
const app = express();

const { createData } = require("../Controllers/Blog.controller");

app.post("/createblog", createData);

module.exports = app;