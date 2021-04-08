//Imports.
const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');

//Define routes.
router.use('/api', apiRoutes);
router.use('/api', homeRoutes);

router.use((req, res) => {
    res.status(404).end();
});

//Exports.
module.exports = router;