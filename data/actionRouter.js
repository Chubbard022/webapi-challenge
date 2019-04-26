const express = require("express");
const action = require("./helpers/actionModel");

const router = express.Router();

router.get("/",(req,res)=>{
    action.find()
    .then(message=>{
        res.status(200).json({message})
})
    .catch(err=>{
        res.status(500).json({ error: "The posts information could not be retrieved." })
    })
})
module.exports = router;
