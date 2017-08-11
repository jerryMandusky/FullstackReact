const express = require('express'); //have to use javascript common modules as nodejs doesn't support currently ES2015 modules
//es2015 modules syntax: import express from 'express';
const app = express();   //generates a new app that represents a running express app

app.get('/', (req, res)=>{
  res.send({ hi: 'there'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
//comment