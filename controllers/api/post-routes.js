const router = require('express').Router()
const { response } = require('express')
const { User, Comment, Post } = require('../../models')
const withAuth = require('../../utils/auth')


// New post
router.post('/', async (req, res) => {
    try {
        const newPost = await Post.create({
            ...req.body,
            user_id: req.session.user_id
        })
        res.status(200).json(newPost)
        
    } catch (error) {
        res.status(500).json(error)
    }
})

// PUT edit a post
router.put('/:id', async (req, res) => {

    console.log('\n\nupdating post\n\n');
    try {
        const editPost = await Post.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json(editPost)
    } catch (error) {
        res.status(500).json(error)
    }
})


// DELETE post
router.delete('/:id', async (req, res) => {

    try {
        const postData = await Post.destroy({
            where: {
                id: req.params.id,
            },
        })
        res.status(200).json(postData)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
    
})

// GET all posts
router.get('/', async (req, res) => {
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
        res.status(200).json(postData)
    } catch (error) {
        res.status(500).json(error)
    }
})

// GET all posts from user
router.get('/user/:id', async (req, res) => {
    try {
        const postData = await Post.find
    } catch (error) {
        res.status(500).json(error)
    }
})




module.exports = router