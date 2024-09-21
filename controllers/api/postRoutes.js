const router = require('express').Router();
const { Post } = require('../../models'); // Assuming Post model is in models

// GET all posts
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll();
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// POST a new post
router.post('/', async (req, res) => {
    try {
        const newPost = await Post.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.session.user_id,
        });
        res.status(201).json(newPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
