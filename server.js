/*

const path = require('path');

*/
const express = require('express');

const server = express();

const PORT = 3000; 

server.use('/', (req, res, next) => {
    console.log("Server running...");
    res.send('<h1>Saying Hello World. From mary\'s computer 1 </h1>');
    // res.send("<h1>Saying Hello World. From mary's computer </h1>");
})

server.listen(PORT)