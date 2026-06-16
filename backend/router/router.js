const express = require("express");
const { signupuser, userlogindata, userveri, passupdate } = require("../controllers/useropertions");
const { adminsignupdata, adminlogindata } = require("../controllers/adminopertions");
const { storesignup, storelogindata, PassStore, ChangrPass } = require("../controllers/storeopertions");

const router = express.Router();




router.put("/passchange",ChangrPass)
router.post("/storepass", PassStore);

router.put("/passcheng", passupdate);
router.post("/verifyuser", userveri);

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