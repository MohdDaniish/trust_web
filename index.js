
require('dotenv').config();
require('./connection');
const express = require('express');
const api = require("./router/api");
const web_api = require("./router/web_api");
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors({
    origin:"*"
}))

const PORT = process.env.PORT || 8080;

app.use("/api",api);
app.use("/web_api",web_api);


app.listen(PORT ,function(){
    console.log("Server Listening on Port " + PORT);
})


