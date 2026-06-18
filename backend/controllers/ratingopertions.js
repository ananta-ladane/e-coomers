
const db = require("../utils/db");




exports.addrating = (req, res) => {
    console.log(req.body)

    const { Uid, Sid, rating } = req.body;

    db.query(

        "SELECT * FROM rating WHERE Uid = ? AND Sid = ?",
        [Uid, Sid],
        (err, result) => {

            if (err) {
                console.log(err)
                return res.status(500).json(err);
            }

            if (result.length > 0) {

                db.query("UPDATE rating SET Rdata = ? WHERE Uid = ? AND Sid =?",
                    [rating, Uid, Sid],
                    (err, result) => {

                        if (err) {
                            console.log(err)
                        }

                        res.json({ result })
                        console.log(result)
                        console.log("update reating successfully...")
                    }
                )
            } else {

                db.query("INSERT INTO rating (Uid, Sid, Rdata )  VALUES (?, ?, ?)",
                    [Uid, Sid, rating],
                    (err, result) => {

                        if (err) {
                            return res.status(500).json(err);
                        }

                        // req.json({ result })
                        console.log(result)
                        console.log("insert reating successfully")
                    }
                )
            }
        }



    )

}

