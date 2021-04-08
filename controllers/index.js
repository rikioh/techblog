//Imports.
const router = require('express').Router();
const apiRoutes = require('./api');

//Define routes.
router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).end();
});

//Exports.
module.exports = router;