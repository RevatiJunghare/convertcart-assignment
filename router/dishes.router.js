const express = require('express');

const dishrouter = express.Router();

dishrouter.get('/dishes',(req,res)=>{
    try{
        res.send("Get all dishes")
    }catch(err){
        console.log(err)
        res.status(500).send({message:err.message})
    }
})
