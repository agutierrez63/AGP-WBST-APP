const express = require('express');
const app = express();
const cors = require('cors')

app.use(express.json());
app.use(cors());

const db = require('./models');
const port = 3001;

// Routers
const productsRouter = require('./routes/Products');
app.use("/products", productsRouter);
const usersRouter = require("./routes/Users");
app.use("/auth", usersRouter);

db.sequelize.sync().then(() => {
    app.listen(port, ()  => {
        console.log("Server is running...\nPORT: ["+ port +"]");
    });
});

