const express = require("express");
const action = require("./helpers/actionModel");

const router = express.Router();


//====================ACTION GET METHOD=============================

router.get("/",(req,res)=>{
    action.get()
    .then(message=>{
        res.status(200).json({message})
})
    .catch(err=>{
        res.status(500).json({ error: "The get information could not be retrieved." })
    })
})
//====================ACTION GET METHOD WITH ID=====================
router.get("/:id",(req,res)=>{
    const messageId = req.params.id;
    action.getProjectActions(messageId)
    .then(message=>{
        if(!messageId){
            res.status(404).json({ message: "The post with the specified ID does not exist." })
        }else{
        res.status(200).json(message)
    }})
    .catch(err=>{
        res.status(500).json({ error: "The post information could not be retrieved." })
    })
})
//====================ACTION POST METHOD============================
router.post("/",(req,res)=>{
    const userPost = req.body;
    db.insert(userPost)
    .then(users=>{
        res.status(201).json(users)
    })
    .catch(err=>{
        res.status(400).json({ errorMessage: "Please provide name and bio for the user." })
    })
})
module.exports = router;
