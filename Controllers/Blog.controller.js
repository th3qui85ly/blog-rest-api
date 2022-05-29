const BlogModel = require("../Models/Blog.model");

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

module.exports = {
    createData
};