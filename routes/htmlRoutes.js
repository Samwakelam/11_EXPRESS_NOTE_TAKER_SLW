// router creates a "bundle" of the routes to usae on the router variable. 
// const router = require('express').Router();
const express = require('express');
const path = require('path');

const app = express();

app.get('/', function(req, res){
    console.log("get/Req =", req.body);
    // console.log("getRes =", res);
    res.sendFile(path.join(__dirname,'../public/index.html'));
});

app.get('/notes', function(req, res){
    console.log("getnotesReq =", req.body);
    // console.log("getRes =", res);
    res.sendFile(path.join(__dirname,'../public/notes.html'));
});

// app.get('*', function(req, res){
//     console.log("getstarReq =", req.body);
//     // console.log("getRes =", res);
//     res.sendFile(path.join(__dirname,'../public/index.html'));
// });

module.exports = app; 