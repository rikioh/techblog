const router = require('express').Router()
const { User } = require('../../models')


// POST new user
router.post('/', async (req, res) => {
    try {
        const userData = await User.create({
            email: req.body.email,
            password: req.body.password,
            name: req.body.name
        })

        req.session.save(() => {
            req.session.user_id = userData.user_id
            req.session.logged_in = true
            res.status(200).json(userData)
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})

// POST user login
router.post('/login', async (req, res) => {

    try {
        // Find matching user
        const userData = await User.findOne({where: {email: req.body.email}})

        // Respond error if no user
        if (!userData) {
            let message = 'Incorrect email or password'
            res.status(400).json(message)
        }

        // Verify password if user exists
        const validPassword = await userData.checkPassword(req.body.password)

        if(!validPassword) {
            let message = 'Incorrect email or password'
            res.status(400).json(message)
        }

        req.session.save(() => {
            req.session.user_id = userData.id
            req.session.logged_in = true

            res.json({user: userData, message: 'You are logged in'})
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

// User logout
router.post('/logout', (req, res) => {

    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end()
        })
    } else {
        res.status(404).end()
    }
})


module.exports = router
