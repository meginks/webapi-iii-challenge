const express = require('express'); 
const UserRouter = require('./user-router.js');
const PostRouter = require('./post-router.js'); 
const server = express(); 
const { capitalizeName } = require('./middleware/middleware'); 




server.use(express.json()); 


// ROUTES 

server.use('/api/users', UserRouter); 
server.use('/api/posts', PostRouter); 
module.exports = server;