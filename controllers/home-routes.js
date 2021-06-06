const router = require('express').Router()
const { User, Comment, Post } = require('../models')
const withAuth = require('../utils/auth')

// Home page route
router.get('/', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: Comment,
                    attributes: ['body'],
                    include: [
                        {
                            model:User,
                            attributes: ['name']
                        }
                    ]
                },
                {
                    model: User,
                    attributes: ['name']
                }
            ],
            attributes: ['title', 'body', 'createdAt', 'user_id', 'id']
        })

        const posts = postData.map((post) => post.get({plain: true}))

        res.render('homepage', {
            posts,
            logged_in: req.session.logged_in,
        })
    } catch (error) {
        res.status(500).json(error)
        
    }
})

// Get all user posts


// Middleware to auth route

// Login GET
router.get('/login', async (req, res) => {
    try {
        
        if (req.session.logged_in) {
            res.redirect('/')
            return
        }

        res.render('login')

    } catch (error) {
        res.status(500).json(error)
        console.log(error);
    }
})

// Profile GET
// Home page route
router.get('/profile', async (req, res) => {

    try {
        const postData = await Post.findAll({
            where: {
                user_id: req.session.user_id
            },
            include: [
                {
                    model: Comment,
                    attributes: ['body'],
                    include: [
                        {
                            model:User,
                            attributes: ['name']
                        }
                    ]
                },
                {
                    model: User,
                    attributes: ['name']
                }
            ],
            attributes: ['title', 'body', 'createdAt', 'user_id', 'id']
        })

        const posts = postData.map((post) => post.get({plain: true}))

        res.render('profile', {
            posts,
            logged_in: req.session.logged_in,
        })
    } catch (error) {
        res.status(500).json(error)
    }
})


module.exports = router