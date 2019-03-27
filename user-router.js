const express = require('express'); 
const UserDB = require('./data/helpers/userDb.js'); 

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

router.post('/', async (req, res) => {
    try {
        const user = await UserDB.insert(req.body); 
        res.status(201).json(user);
    } catch (error) {
        res.status(500)
        .json({
            message: `error adding the user. error: ${error}`
        })
    }
}) 





module.exports = router 