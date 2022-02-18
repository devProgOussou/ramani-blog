const Post = require('../models/post.model');
const ObjectID = require("mongoose").Types.ObjectId;

// @route   POST api/post
module.exports.addPost = async (req, res) => {
    const { title, content, imagePath } = req.body;
    try {
        const post = await Post.create({
            title,
            content,
            imagePath
        })
        res.status(201).json({
            message: 'Post added successfully',
            post
        })
    }
    catch (err) {
        res.status(500).json({
            message: 'Something went wrong'
        })
    }
}

// @route   GET api/post
module.exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json({
            message: 'Posts fetched successfully',
            posts
        })
    }
    catch (err) {
        res.status(500).json({
            message: 'Something went wrong'
        })
    }
}

// @route   GET api/post/:id
module.exports.getPost = async (req, res) => {
    try {
        //Check if id is valid
        if (!ObjectID.isValid(req.params.id))
            return res.status(404).send({ message: `Unknown ID : ${req.params.id}` });
        
        const { id } = req.params;
        const post = await Post.findById(id);
        res.status(200).json({
            message: 'Post fetched successfully',
            post
        })
    }
    catch (err) {
        res.status(500).json({
            message: 'Something went wrong'
        })
    }
}

// @route   PUT api/post/:id
module.exports.updatePost = async (req, res) => {
    try {

        const { id } = req.params;
        //Check if id is valid
        if (!ObjectID.isValid(id))
            return res.status(404).send({ message: `Unknown ID : ${id}` });
        
        const { title, content, imagePath } = req.body;
        const post = await Post.findByIdAndUpdate(id, {
            title,
            content,
            imagePath
        }, {
            new: true
        });
        res.status(200).json({
            message: 'Post updated successfully',
            post
        })
    }
    catch (err) {
        res.status(500).json({
            message: 'Something went wrong'
        })
    }
}

// @route   DELETE api/post/:id
module.exports.deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        //Check if id is valid
        if (!ObjectID.isValid(id))
            return res.status(404).send({ message: `Unknown ID : ${id}` });
            
        await Post.findByIdAndDelete(id);
        res.status(204).json({
            message: 'Post deleted successfully'
        })
    }
    catch (err) {
        res.status(500).json({
            message: 'Something went wrong'
        })
    }
}
