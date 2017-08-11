const express = require('express'); //have to use javascript common modules as nodejs doesn't support currently ES2015 modules
//es2015 modules syntax: import express from 'express';
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Stategy;
const keys = require('./config/keys');

const app = express();   //generates a new app that represents a running express app


//client id 
//client secret 
passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback'
  }, ()=>{
    console.log(accessToken);
  })
);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
//comment