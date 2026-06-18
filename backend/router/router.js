const express = require("express");
const { signupuser, userlogindata, userveri, passupdate, userdata } = require("../controllers/useropertions");
const { adminsignupdata, adminlogindata } = require("../controllers/adminopertions");
const { storesignup, storelogindata, PassStore, ChangrPass, SotreSearch, storedataget } = require("../controllers/storeopertions");
const { addrating } = require("../controllers/ratingopertions");


const router = express.Router();






router.post("/rating", addrating)

//------ serach data usering name and address of store 

router.post("/storesaerch", SotreSearch)


//-----update password user and store below

router.put("/passchange", ChangrPass)
router.post("/storepass", PassStore);

router.put("/passcheng", passupdate);
router.post("/verifyuser", userveri);


// ----- signup and login router below
router.get("/store", storedataget);
router.get("/storlogin", storelogindata);
router.post("/storesignupdata", storesignup);

router.get("/adminlogin", adminlogindata);
router.post("/adminsingup", adminsignupdata);

router.get("/usersget", userdata);
router.post("/userlogin", userlogindata);
router.post("/usersignup", signupuser);

router.get("/", (req, res) => {

    res.send("<h1>Frontend-Backend Connect successfully </h1>")
    console.log("router make successfully...!")

});



module.exports = router;