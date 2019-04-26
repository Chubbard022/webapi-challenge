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
//====================ACTION POST METHOD============================
router.post("/",(req,res)=>{
    const userPost = req.body;
    action.insert(userPost)
    .then(users=>{
        res.status(201).json(users)
    })
    .catch(err=>{
        res.status(400).json({ errorMessage: "Please provide name and bio for the user." })
    })
})
//====================ACTION PUT METHOD=============================

//====================ACTION DELETE METHOD==========================
router.delete("/:id",(req,res)=>{
    const messageID = req.params.id
    action.remove(messageID)
    .then(response=>{
        if(!response){
            res.status(404).json({ response: "The post with the specified ID does not exist." })
        }else{
            res.status(204).end()
        }
    })
    .catch(err=>{
        res.status(500).json({ error: "The post could not be removed" })
    })
})


module.exports = router;
