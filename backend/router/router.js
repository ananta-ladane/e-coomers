const express = require("express");
const { signupuser, userlogindata, userveri } = require("../controllers/useropertions");
const { adminsignupdata, adminlogindata } = require("../controllers/adminopertions");
const { storesignup, storelogindata } = require("../controllers/storeopertions");

const router = express.Router();





router.post("/verifyuser", userveri)

router.get("/storlogin", storelogindata);
router.post("/storesignupdata", storesignup);

router.get("/adminlogin", adminlogindata);
router.post("/adminsingup", adminsignupdata);

router.get("/userlogin", userlogindata);
router.post("/usersignup", signupuser);

router.get("/", (req, res) => {

    res.send("<h1>Frontend-Backend Connect successfully </h1>")
    console.log("router make successfully...!")

});



module.exports = router;