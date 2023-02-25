/*const express = require("express");
const app = express();

app.use(express.json());
const db = require("./models");

// Routers
const postRouter = require("./routes/Posts");
app.use("/posts", postRouter);

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server running on PORT: 3001");
    });
});*/



const express = require('express');
const app = express();
const cors = require('cors')

app.use(express.json());
app.use(cors());

const db = require('./models');
const port = 3001;

// Routers
const postRouter = require('./routes/Posts');
app.use("/posts", postRouter);

db.sequelize.sync().then(() => {
    app.listen(port, ()  => {
        console.log("Server is running: PORT["+ port +"]");
    });
});

