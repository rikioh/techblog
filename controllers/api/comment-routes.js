const router = require('express').Router()
const { Comment } = require('../../models')

// Post new comment
router.post('/', async (req, res) => {

    console.log('\n\n posting comment \n\n');

    console.log(req.body.body);
    console.log(req.body.post_id);
    console.log(req.session.user_id);

    try {
        const commentData = Comment.create({
            body: req.body.body,
            post_id: req.body.post_id,
            user_id: req.session.user_id
        })
        res.status(200).json(commentData)
    } catch (error) {
        res.status(500).json(error)
    }
})


module.exports = router