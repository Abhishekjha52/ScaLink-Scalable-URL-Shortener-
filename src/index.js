import express from 'express';
import mongoose from 'mongoose';
import urlRoutes from '../routes/urlRouter.js';
import dotenv from 'dotenv';
dotenv.config();
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
app.use(express.json());
app.use('/url', urlRoutes);


app.listen (3000, () => {
  console.log ('Server listening on port 3000');
});