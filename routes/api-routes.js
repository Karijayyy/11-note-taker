let router = require("express").Router();
let fs = require("fs");

//this receives the notes from the db
router.get("/api/notes", (req, res) => {
  fs.readFile("db/db.json", "utf8", (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
});
// this will add notes
router.post("/api/notes", (req, res) => {
  fs.readFile("db/db.json", "utf8", (err, data) => {
    if (err) throw err;
    let savedNotes = JSON.parse(data);
    let updatedNotes = [req.body, ...savedNotes];
    fs.writeFile("db/db.json", JSON.stringify(updatedNotes), (err) => {
      if (err) throw err;
      res.sendStatus(200);
    });
  });
});

// this will delete the notes
router.delete("/api/notes/:id", (req, res) => {
  fs.readFile("db/db.json", "utf8", (err, data) => {
    if (err) throw err;
    let savedNotes = JSON.parse(data);
    let indexToRemove = req.params.id;
    console.log(indexToRemove)
    // let updatedNotes = savedNotes.splice(indexToRemove, 1)
    // console.log(updatedNotes) 
    savedNotes.splice(indexToRemove, 1)
    fs.writeFile("db/db.json", JSON.stringify(savedNotes), (err) => {
      if (err) throw err;
      console.log("is it running?")
      res.sendStatus(200);
    });
  });
  // store
  //   .removeNote(req.params.id)
  //   .then(() => res.json({ ok: true }))
  //   .catch((err) => res.status(500).json(err));
});

module.exports = router;
