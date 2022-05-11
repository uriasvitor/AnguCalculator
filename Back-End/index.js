const express = require('express');

const app = express(),
    bodyParse = require("body-parser");
    port = 3080;

const users = [];

app.use(bodyParse.json());

app.get('/api/users',(req,res)=>{
    res.json(users)
});

app.post('/api/user',(req,res)=>{
    const user = req.body.user;
    users.push(user);
    res.json("user addedd");
})
    