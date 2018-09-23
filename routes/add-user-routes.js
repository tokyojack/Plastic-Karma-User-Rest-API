var router = require("express").Router();

var User = require('../models/User');
module.exports = function () {

    router.post("/", (req, res) => {
        var body = req.body;

        var user = new User({
            email: body.email,
            password: body.password,
            current_score: body.current_score,
            waste_score: body.waste_score,
            prior_month_score: body.prior_month_score
        });

        user.save(function (err) {
            if (err) res.send(err);

            res.json({
                message: 'User created successfully'
            });

        });
    });

    return router;
}