import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
dotenv.config();
app.use(cors());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("Mongodb Connected");
  app.listen(PORT, () => {
    console.log(`Server listen at port ${PORT}`);
  });
});
