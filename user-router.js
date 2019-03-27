const express = require('express'); 
const UserDB = require('./data/helpers/userDb.js'); 

const router = express.Router(); 

// api/users
router.get('/', async (req, res) => {
    try {
        const users = await UserDB.get(req.query); 
        res.status(200)
        .json(users); 
    } catch (error) {
        res.status(500)
        .json({
            message: 'Error retrieving users'
        })
    }
} )



module.exports = router 