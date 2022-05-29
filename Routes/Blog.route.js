const express = require("express");
const app = express();

const { 
    createData,
    likeBlog,
    listBlog
} = require("../Controllers/Blog.controller");

app.post("/createblog", createData);
app.get("/listblog", listBlog);
app.post("/likeblog/:id", likeBlog);

module.exports = app;