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

    console.log(req.body);
    const { uname, uemail, upass } = req.body;
    db.query(
        "SELECT * FROM user WHERE uname = ? AND uemail = ? AND upass = ?",
        [uname, uemail, upass],
        (err, result) => {

            if (err) {
                console.log(err);
                return res.status(500).json(err);
            }

            res.json({ result });
            console.log(result)
        }

    )
};

exports.userdata = (req, res) => {

    db.query(
        "SELECT * FROM user",
        (err, result) => {

            if (err) {
                console.log(err)
            }

            res.json(result)
        }
    )
}


exports.userveri = (req, res) => {

    console.log(req.body)

    const { uname, uemail } = req.body;

    db.query(
        "SELECT * FROM user WHERE uname=?  AND uemail=? ",
        [uname, uemail],
        (err, result) => {

            console.log(result)
            if (err) return res.status(500).json(err);

            res.json({ result });

        }


        // "SELECT * FROM user WHERE uname=? AND uemail=?",
        // [uname, uemail],
        // (err, result) => {
        //     console.log(result);
        // }

    );
}

exports.passupdate = (req, res) => {
    console.log(req.body)

    const { upass, uname, uemail } = req.body

    db.query(
        "UPDATE user SET upass = ? WHERE uname =? AND uemail =?", [upass, uname, uemail], (err, result) => {

            if (err) {
                console.log("password not update still")
            }

            console.log(result)
            console.log("password update")
        }
    )

}