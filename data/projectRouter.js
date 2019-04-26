const express = require("express");

const project = require("./helpers/projectModel");
const router = express.Router();

//====================PROJECT GET METHOD=============================
router.get("/",(req,res)=>{
    project.get()
    .then(message=>{
        res.status(200).json({message})
})
    .catch(err=>{
        res.status(500).json({ error: "The posts information could not be retrieved." })
    })
})
//====================PROJECT GET METHOD WITH ID=====================
router.get("/:id",(req,res)=>{
    const messageId = req.params.id;
    project.getProjectActions(messageId)
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
//====================PROJECT POST METHOD============================
router.post("/",(req,res)=>{
    const userPost = req.body;
    project.insert(userPost)
    .then(response=>{
        res.status(201).json(response)
    })
    .catch(err=>{
        res.status(400).json({ errorMessage: "cannot POST a new project." })
    })
})

//====================PROJECT DELETE METHOD==========================

//====================PROJECT PUT METHOD=============================


module.exports = router;
