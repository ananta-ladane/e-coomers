const db = require("../utils/db")


exports.adminsignupdata = (req, res) => {

    console.log(req.body)

    const { Name, Email, Address, Password } = req.body;

    db.query(
        "INSERT INTO admin ( Name, Email, Address, Password) VALUES ( ?, ?, ?, ?)",
        [Name, Email, Address, Password],
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


exports.adminlogindata = (req, res) => {

    db.query(
        "SELECT * FROM admin", (err, result) => {

            if (err) {
                console.log(err);
                return res.status(500).json(err);
            }

            res.json(result);
        }

    )
};