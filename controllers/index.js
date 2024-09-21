const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes'); // Add homeRoutes if needed

router.use('/api', apiRoutes);  // Use the API routes
router.use('/', homeRoutes);    // Use home page routes (if applicable)

module.exports = router;
