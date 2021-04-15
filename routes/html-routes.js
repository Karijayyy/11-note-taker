let router = require("express").Router();
let path = require("path");
// const apiRoutes = require('./routes/api-routes');
// const htmlRoutes = require('./routes/html-routes');

router.get('/', (req, res) => res.sendFile(path.join(__dirname, "../public/index.html")));
router.get('/notes', (req, res) => res.sendFile(path.join(__dirname, "../public/notes.html")));

module.exports = router