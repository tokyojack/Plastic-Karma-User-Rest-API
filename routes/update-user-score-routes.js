var router = require("express").Router();

var User = require('../models/User');
module.exports = function () {

    router.post("/", (req, res) => {

        var body = req.body;

        User.findOneAndUpdate({
                email: body.email
            }, {
                $inc: {
                    current_score: parseInt(body.amount)
                }
            },
            function (err, user) {
                if (err)
                    res.send(err);

                    var newScore = parseInt(user.current_score) + parseInt(body.amount);

                    res.json({
                        score: newScore
                    });
                });
    });

    return router;
}