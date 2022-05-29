const BlogModel = require("../Models/Blog.model");

// creating a new blog
const createData = async (req, res) => {
    try {
        const data = await BlogModel.create(req.body);
        res.status(200).json({
            status: "success",
            data,
        });
    }
    catch(err) {
        res.status(401).json({
            status: "failed",
            err
        });
    }
}

// listing all blogs according to popularity
const listBlog = async (req, res) => {
    try {
        const data = await BlogModel.find().sort({ likes: -1 });
        res.status(200).json({
            status: "success",
            data
        });
    }
    catch(err) {
        res.status(401).json({
            status: "failed",
            err
        });
    }
}

// searching blogs based on author and title
const searchBlog = async (req, res) => {
    try {
        const author = req.query.author;
        const title = req.query.title;
        const data = await BlogModel.find({ $and: [{title},{author}] });
        res.status(200).json({
            status: "success",
            data
        });
    }
    catch(err) {
        res.status(401).json({
            status: "failed",
            message: "NO blogs found or some error occured!",
            err
        });
    }
}

// publishing a blog after saving
const publishBlog = async (req, res) => {
    try {
        const id = req.params.id;
        await BlogModel.findByIdAndUpdate(id, {published: true});
        res.status(200).json({
            status: "Blog published",
            id: id
        })
    }
    catch(err) {
        res.status(401).json({
            status: "failed",
            message: "Couldn't publish the blog",
            err
        })
    }
}

// viewing a blog
const blog = async (req, res) => {
    try {
      const id = req.params.id;
      const data = await BlogModel.findById(id);
      res.status(200).json({
        status: "success",
        data,
      });
    }
    catch (err) {
        res.status(401).json({
            status: "failed",
            err
        });
    }
  };

// liking a blog
const likeBlog = async (req, res) => {
    try {
        const id = req.params.id;
        const payload = await BlogModel.findById(id);
        payload.likes = payload.likes + 1;
        await BlogModel.findByIdAndUpdate(id, payload);
        await res.status(200).json({
            status: "success",
            message: "Like updated!",
            payload
        });
    }
    catch(err) {
        res.status(401).json({
            status: "Like not sent"
        });
    }
}

module.exports = {
    createData,
    listBlog,
    searchBlog,
    publishBlog,
    blog,
    likeBlog
};