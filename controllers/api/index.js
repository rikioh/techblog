//Imports.
const router = require('express').Router();
const userRoutes = require('./user-routes');

//Define routes.
router.use('/user', userRoutes);

//Exports
module.exports = router;