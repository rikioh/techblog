//Imports.
const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');

//Define routes.
router.use('/api', apiRoutes);
router.use('/', homeRoutes);

//Exports.
module.exports = router;