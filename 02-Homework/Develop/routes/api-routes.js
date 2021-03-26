let router = require ("express").Router();
let fs = require ("fs");

router.get("/api/notes", (req,res)=>{
   fs.readFile("db/db.json", "utf8", (err,data)=>{
       if (err) throw err;
       res.json(JSON.parse(data));
   }) 
});

router.post("/api/notes", (req,res)=>{
    fs.readFile("db/db.json", "utf8", (err,data)=>{
        if (err) throw err;
let savedNotes = JSON.parse(data);
let updatedNotes = [req.body, ...savedNotes];
fs.writeFile("db/db.json", JSON.stringify(updatedNotes), err => {
    if (err) throw err;
    res.status(200);
});
    }) 
 });

module.exports = router;