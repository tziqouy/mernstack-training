import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();

app.listen(process.env.APP_PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.APP_PORT}`);
});
