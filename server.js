const express = require('express'); 
const UserRouter = require('./user-router.js');

const server = express(); 

//MIDDLEWARE 
server.use(express.json()); 


// ROUTES 

server.use('/api/users', UserRouter);

module.exports = server;