const express = require('express');
const PostDB = require ('./data/helpers/postDb.js'); 

const router = express.Router(); 


// GET POSTS 

router.get('/', async (req, res) => {
    try { 
        const posts = await PostDB.get(req.query); 
            res.status(200)
            .json(posts)
    } catch (error) {
        res.status(500)
        .json({
            message: `Could not retrieve posts. Error: ${error}`
        })
    }
} )

// GET POSTS BY POST ID 

router.get('/:id', async (req, res) => {
    try {
    const post = await PostDB.getById(req.params.id); 
    if (post) {
        res.status(200)
        .json(post)
    } else {
        res.status(404).json({ 
            message: `Post not found`
        })
    } } catch (error) {
        res.status(500)
        .json({
            message: `Error getting post by id. Error: ${error}`
        })
    }
})

module.exports = router 