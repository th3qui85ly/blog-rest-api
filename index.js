const express = require("express");
require('dotenv').config()

const PORT = process.env.PORT || 1912;

const app = express();

// Middlewares
app.use(express.json());

// Driver code
app.listen(PORT, () =>
    console.log(`Blog API Server started at PORT : ${PORT}`)
);