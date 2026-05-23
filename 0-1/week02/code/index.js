// Express Basic - creating a HTTP server
// to install - npm install express

const express = require("express");

const app = express()

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`)
});

// to run- node index.js - open localhost:3000