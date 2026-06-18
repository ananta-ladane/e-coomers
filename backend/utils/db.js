const mysql = require("mysql2");


const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "Raider@123",
    database: "e-commers"
});

connection.connect((err) => {
    if (err) {
        console.log("Database connection failed:", err);
    } else {
        console.log("Database connected successfully");
    }
});

module.exports = connection;