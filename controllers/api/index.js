const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');

// Mount the routes
router.use('/users', userRoutes);     // Handles requests starting with /api/users
router.use('/posts', postRoutes);     // Handles requests starting with /api/posts
router.use('/comments', commentRoutes);  // Handles requests starting with /api/comments

module.exports = router;
