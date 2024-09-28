const router = require('express').Router();
const userRoutes = require('./userRoutes');    // Import user routes
const postRoutes = require('./postRoutes');    // Import post routes
const commentRoutes = require('./commentRoutes');  // Import comment routes

// Use routes for user, post, and comment APIs
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
