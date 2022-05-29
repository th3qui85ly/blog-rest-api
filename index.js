const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config()
const db_uri = process.env.DB_URI;

const PORT = process.env.PORT || 1912;

const app = express();

// Middlewares
app.use(express.json());

// Db Connect
mongoose.connect(db_uri, () => {
    console.log(`Database connected through MongoDb`)
})

// Driver code
app.listen(PORT, () =>
    console.log(`Blog API Server started at PORT : ${PORT}`)
);