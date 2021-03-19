let router = require ("express").Router();
let fs = require ("fs");
router.get("/api/notes", (req,res)=>{
   fs.readFile("../db/db.json", "utf8", (err,data)=>{
       //console log error if it was correct send data to front end
   }) 
});

//create post route (you'll see in front end for the call and write route that matches it)

module.exports = router;