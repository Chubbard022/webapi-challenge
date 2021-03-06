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
    const userText = (req.body)
    action.insert(userText)
    .then(user => {
        if (userText) {
        res.status(201).json(user);
        } else {
        res.status(400).json({ user: "content and project ID required" });
        }
    })
    .catch(err => {
        res.status(400).json({ error: "content and project ID required" });
    });
})
//====================ACTION PUT METHOD=============================
router.put("/:id", (req, res) => {
    const userID = (req.params.id)
    const userText = (req.body)
    action.update(userID,userText)
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
