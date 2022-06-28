const express = require('express');
const app = express();

//Middlewares


//Routes
app.get('/', (req, res) => {
    res.send("Welcome to node js server").status(200);
});


//listen on port 4000
app.listen(4000)