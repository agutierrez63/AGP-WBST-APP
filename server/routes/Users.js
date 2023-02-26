const express = require('express');
const router = express.Router();
const { Users } = require('../models');
const bcrypt = require("bcrypt");

router.get("/", async (req, res) => {
    // const listOfUsers = await Users.findAll();
    // res.json(listOfUsers);
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

module.exports = router;