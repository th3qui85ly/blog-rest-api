const express = require("express");
const app = express();

const { 
    createData,
    likeBlog,
    searchBlog,
    publishBlog,
    blog,
    listBlog
} = require("../Controllers/Blog.controller");

app.post("/createblog", createData);
app.get("/listblog", listBlog);
app.get("/search", searchBlog);
app.patch("/publish/:id", publishBlog);
app.get("/:id", blog);
app.post("/likeblog/:id", likeBlog);

module.exports = app;