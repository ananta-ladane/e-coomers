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

exports.PassStore = (req, res) => {

    console.log(req.body);

    const { sname, semail } = req.body
    db.query(
        "SELECT * FROM store WHERE sname = ? AND semail =? ",
        [sname, semail],
        (err, result) => {
            if (err) {
                console.log(err)
                return res.status(500).json(err);
            }

            res.json({ result })
            console.log(result)

        }

    )
}


exports.ChangrPass = (req, res) => {
    console.log(req.body)

    const { sname, semail, spass } = req.body

    db.query(
        "UPDATE store SET spass = ? WHERE sname =? AND semail = ? ",
        [spass, sname, semail],
        (err, result) => {
            if (err) {
                console.log(err)
                return res.status(500).json(err);
            }

            res.json({ result })
            console.log(result)
        }
    )
}