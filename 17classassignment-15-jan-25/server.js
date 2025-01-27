// import express from 'express'
// import path from 'path'
const express = require('express')
const app =express();
const port =6789;
const path = require('path')
const ejs = require('ejs');
import ejs from 'ejs'



app.use(express.static('public'))
app.use('/static' , express.static(path.join(__dirname,'public')))

app.set("view engine","ejs");

app.get("/" , (req,res) => {
    res.render("index");
})

app.listen(port)