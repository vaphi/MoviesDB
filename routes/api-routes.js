const db = require("../models");
// const jwt = require('jsonwebtoken');
// const passport = require("../utils/passport");

module.exports = function (app) {
    app.post("/api/newUser", (req, res) => {
        db.User.create({
            email: req.body.email,
            password: req.body.password
        })
        .then(function (dbUser) {
            res.json(dbUser)
        });
    });

    
}