const express = require("express");

const project = require("./helpers/projectModel");
const router = express.Router();


router.get("/",(req,res)=>{
    project.find()
    .then(message=>{
        res.status(200).json({message})
})
    .catch(err=>{
        res.status(500).json({ error: "The posts information could not be retrieved." })
    })
})

module.exports = router;
