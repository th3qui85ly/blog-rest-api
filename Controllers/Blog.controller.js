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

// listing all blog according to popularity
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
    likeBlog
};