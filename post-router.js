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

// POST post 

router.post('/', async (req, res) => {
    try {
        const post = await PostDB.insert(req.body); 
            res.status(201)
            .json(post)
    } catch (error) {
        res.status(500).json({
            message: `Cannot make post. Error: ${error}`
        })
    }
})

// PUT post 

router.put('/:id', async (req, res) => {
    try {
        const post = await PostDB.update(req.params.id, req.body); 
        if (post) {
        res.status(200)
        .json(post)
        } else {
            res.status(404)
            .json({
                message: 'Could not find post to update'
            })
        }
    } catch (error) {
        res.status(500)
        .json({
            message: `Cannot update post. Error: ${error}`
        })
    }
})


// DELETE post 

router.delete('/:id', async (req, res) => {
    try {
        const post = await PostDB.remove(req.params.id); 
        if (post) {
            res.status(200)
            .json(post)
        } else {
            res.status(404)
            .json({
                message: 'could not find post to delete'
            })
        }
    } catch (error) {
        res.status(500)
        .json({
            message: `Could not delete post. Error: ${error}`
        })
    }
})




module.exports = router 