const express = require('express');
const router = express.Router(); 
// path : /user, asagida / ana sayfa zaten user

const data = require("../models/data")

router.get("/", (req,res) => {
    res.render("user", {users : data.userList, id : ""});
})

router.get("/add", (req,res) => { // aslinda /user/add
    res.send("User Add");
})

router.get("/:id", (req,res) => { 
    res.render("user", {users: data.userList, id : req.params.id });
})

/*exports.getUser = (req,res) => {
    res.send("User Page");

}*/

module.exports = router;