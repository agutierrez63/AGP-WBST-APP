const express = require('express');
const router = express.Router();
const { Users } = require('../models');
const bcrypt = require("bcrypt");

router.get("/", async (req, res) => {
    const listOfUsers = await Users.findAll();
    res.json(listOfUsers);
    // console.log("Users avaialble");
});

router.post("/", async (req, res) => {
    try {
        const { firstname, lastname, email, password } = req.body;
        bcrypt.hash(password, 10).then((hash) => {
            Users.create({
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: hash
            });
            res.json("User Created!");
        });
    } catch {
        res.send(error);
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const user = await Users.findOne({ where: { email: email } });

    if (!user) res.json({ error: "User Doesn't Exist" });
    
    bcrypt.compare(password, user.password).then((match) => {
        if (!match) res.json({ error: "Wrong email/password combination." });
        res.json("Logged In!");
    });
});

module.exports = router;