"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const datasource_1 = require("./datasource");
const express = require('express');
const { dishrouter } = require('./router/dishes.router');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
app.use('/search', dishrouter);
datasource_1.AppDataSource.initialize().then(() => {
    console.log("Database connected");
    app.listen(8085, () => {
        console.log("Server running on port 8085");
    });
})
    .catch((err) => console.error("DB error:", err));
