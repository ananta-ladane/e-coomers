const db = require("../utils/db")


exports.signupuser = (req, res) => {

    console.log(req.body)
    const { uname, upass, uemail, uaddress } = req.body;

    db.query(
        "INSERT INTO user ( uname, upass, uemail, uaddress) VALUES ( ?, ?, ?, ?)",
        [uname, upass, uemail, uaddress],
        (err, result) => {

            if (err) {
                console.log("MYSQL ERROR:", err);
                return res.status(500).json(err);
            }

            console.log(result);

            res.json({ message: "User Added" });
        }
    );
};

exports.userlogindata = (req, res) => {

    db.query(
        "SELECT * FROM user", (err, result) => {

            if (err) {
                console.log(err);
                return res.status(500).json(err);
            }

            res.json(result);
        }

    )
};


exports.userveri = (req, res) => {

    console.log(req.body)

    const { uname, uemail } = req.body;

    db.query(
        // "SELECT * FROM user WHERE uname=?  AND uemail=? ",
        // [uname, uemail],
        // (err, result) => {

        //     console.log(result)
        //     if (err) return res.status(500).json(err);

        //     if (result.length > 0) {
        //         res.json({ success: true });
        //     } else {
        //         res.json({ success: false });
        //     }
        // }

        
            "SELECT * FROM user WHERE uname=? AND uemail=?",
            [uname, uemail],
            (err, result) => {
                console.log(result);
            }
    
    );
}