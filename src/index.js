const express  = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
console.log("Loaded MONGO URI:", process.env.MONGO);
// Connect to DB
mongoose
  .connect(process.env.MONGO)
  .then (() => {
    console.log ('Connected to MONGODB');
  })
  .catch (err => {
    console.log (err);
});

const app = express();

app.listen (3000, () => {
  console.log ('Server listening on port 3000');
});