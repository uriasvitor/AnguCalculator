const express = require('express');

const app = express(),
    bodyParse = require("body-parser");
    port = 3080;

const count = [];

app.use(bodyParse.json());

app.get('/api/count',(req,res)=>{
    res.json(count)
});

app.post('/api/count',(req,res)=>{
    const count = req.body.count;
    count.push(count);
    res.json("count addedd");
})

app.get('/',(req,res)=>{
    res.send('app-works');
});

app.listen(port,()=>{
    console.log(`Server listening on the port::${port}`);
})
    