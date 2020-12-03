const express = require("express");
const router = express.Router();


router.get("/", (req,res)=> {
    
    res.render("main", {name : req.query.name});

});


/*exports.getMain = (req,res)=> {
    console.log('GET REQUEST TO /')
    //response.send("Hellllooooo")
    //response.sendFile(path.join(__dirname,"about.html"));
    //absolute ister ama bu metodla da kisaca yapariz

    //path.join(__dirname,about.html)

    res.render("main");

}*/


module.exports = router;