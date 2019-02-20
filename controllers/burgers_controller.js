const express = require("express");
const router = express.Router();
// import the model (burger.js) to use its database functions
const burger = require("../models/burger.js");

// default route to home page
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        //console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/", function (req, res) {

    burger.insertOne([
        "burger_name"
    ], [
            req.body.name
        ], function () {
            res.redirect("/");
        });
});

router.put("/:id?", function (req, res) {
    console.log("req.params.id: " + req.params.id);
    var condition = "id = " + req.params.id;
    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function () {
        res.redirect("/");
    });
});

router.delete("/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    burger.delete(condition, function () {
        res.redirect("/");
    });
});


// export routes for server.js to use
module.exports = router;