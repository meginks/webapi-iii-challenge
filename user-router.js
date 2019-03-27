const express = require('express'); 
const UserDB = require('./data/helpers/userDb.js'); 
const { capitalizeName } = require('./middleware/middleware'); 
const router = express.Router(); 

// api/users route 

// Get users 
router.get('/', async (req, res) => {
    try {
        const users = await UserDB.get(req.query); 
        res.status(200)
        .json(users); 
    } catch (error) {
        res.status(500)
        .json({
            message: `Error retrieving users. Error: ${error}`
        })
    }
} )

// Get user by id 
router.get('/:id', async (req, res) => {
    try {
        const user = await UserDB.getById(req.params.id); 
        if (user) {
            res.status(200).json(user); 
        } else {
            res.status(404).json({ message: "user not found" })
        }
    } catch (error) {
        res.status(500)
        .json({
            message: `Error getting user by id. Error: ${error}`
        })
    }
}) 

// Post user 

router.post('/', capitalizeName, async (req, res) => {
    try {
        const user = await UserDB.insert( { name: req.body.capitalizedName}); 
        res.status(201).json(user);
    } catch (error) {
        res.status(500)
        .json({
            message: `error adding the user. error: ${error}`
        })
    }
}) 

// Put user 

router.put('/:id', capitalizeName, async (req, res) => {
    try {
        const user = await UserDB.update(req.params.id, {name: req.body.capitalizedName}); 
        if (user) {
            res.status(200) 
            .json(user)
        } else {
            res.status(404)
            .json({
                message: 'Could not find the user to update'
            })
            
        }
    } catch (error) {
        res.status(500) 
        .json({
            message: `Error updating the user. Error: ${error}`
        })
    }
});

// Delete user

router.delete('/:id', async (req, res) => {
    try {
        user = await UserDB.remove(req.params.id); 
        if (user) {
            res.status(200)
            .json(user)
        } else {
            res.status(404) 
            .json({
                message: 'Could not find user to delete'
            })
        }
    } catch (error) {
        res.status(500)
        .json({
            message: `Could not delete user. Error: ${error}`
        })
    }
})


// GET POSTS BY USER ID 

router.get('/:id/posts', async (req, res) => {
    try {
        const postsByUser = await UserDB.getUserPosts(req.params.id); 
        if (postsByUser) {
            res.status(200)
            .json(postsByUser)
        } else {
            res.status(404)
            .json({
                message: `Could not find that user.`
            })
        }
    } catch (error) {
        res.status(500)
        .json({
            message: `Could not retrieve posts by user. Error: ${error} ` 
        })
    }
}) 

module.exports = router 