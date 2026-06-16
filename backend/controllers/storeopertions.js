const db = require("../utils/db")



exports.storesignup = (req, res) => {

    console.log(req.body)
    const { sname, semail, saddress, spass } = req.body;

    db.query(
        "INSERT INTO store ( sname, semail, saddress, spass) VALUES ( ?, ?, ?, ?)",
        [sname, semail, saddress, spass],
        (err, result) => {

            if (err) {
                console.log("MYSQL ERROR:", err);
                return res.status(500).json(err);
            }

            console.log(result);

            res.json({ message: "User Added" });
        }
    );
}


exports.storelogindata = (req, res) => {

    db.query(
        "SELECT * FROM store", (err, result) => {

            if (err) {
                console.log(err);
                return res.status(500).json(err);
            }

            res.json(result);
        }

    )
};