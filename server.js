const path = require('path')

const express = require('express');

const server = express();

const PORT = 3000; 

server.use('/', (req, res) => {
    console.log("Server running...");
    res.send('<h1>Saying Hello World again!!</h1>');
})

server.listen(PORT)