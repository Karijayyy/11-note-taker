// Dependencies
const express = require('express');
const apiRoutes = require('./routes/api-routes');
const htmlRoutes = require('./routes/html-routes');
//commented out path bc its not called until html-routes.js & that doesn't work either
// const path = require('path');

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// ********** called the routes at the end to see if this would work*******
app.use(require("./routes/api-routes", apiRoutes));
app.use(require("./routes/html-routes", htmlRoutes));
// Starts the server to begin listening

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
