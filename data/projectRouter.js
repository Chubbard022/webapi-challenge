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
        if(message.length === 0){
            res.status(404).json({ error: "correct project ID required" })
            return;
        }else{
            res.status(200).json(message)
        }})
        // if (messageId) {
        //     res.status(201).json(message);
        //     } else {
        //     res.status(400).json({ message: "correct project ID required" });
        //     }
        // })
    .catch(err=>{
        res.status(500).json({ error: "project information could not be found" })
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
router.delete("/:id",(req,res)=>{
    const messageID = req.params.id
    project.remove(messageID)
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

//====================PROJECT PUT METHOD=============================
router.put("/:id", (req, res) => {
    const userID = (req.params.id)
    const userText = (req.body)
    project.update(userID,userText)
    .then(user => {
        if (userID && userText) {
        res.status(202).json(user);
        } else {
        res.status(404).json({ message: "The user with the specified ID does not exist." });
        }
    })
    .catch(err => {
        res.status(500).json({ error: "The user information could not be modified." });
    });
});

module.exports = router;
