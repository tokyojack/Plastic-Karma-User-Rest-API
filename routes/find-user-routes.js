var router = require("express").Router();

var User = require('../models/User');
module.exports = function() {

    router.get("/:email", (req, res) => {

        User.findOne({ email: req.params.email }, function(err, user) {
            if (err)
                res.send(err);

            res.json(user);
        });   
    });

    return router;
}