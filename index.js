const express = require('express');
const app = express();

const port = 4000;

app.get('/',(req,res) => {
    res.send("Server is running on port");
});

app.post('/create',(req,res) => {
    res.send("Post method");
});

app.listen(port , () => {
    console.log("Server is running on ",port);
});