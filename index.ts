import dotenv from "dotenv";
dotenv.config();
import "reflect-metadata";
import { AppDataSource } from "./datasource";

const express = require('express');
const { dishrouter } = require('./router/dishes.router');
const cors = require('cors');

const app = express();


app.use(express.json());
app.use(cors());
app.use('/search',dishrouter)


AppDataSource.initialize().then(() => {
    console.log("Database connected");
  
    app.listen(8085, () => {
      console.log("Server running on port 8085");
    });
  })
  .catch((err) => console.error("DB error:", err));