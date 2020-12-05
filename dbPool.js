const mysql = require('mysql');
const pool = mysql.createPool({
connectionLimit: 10,
host: "de1tmi3t63foh7fa.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
user: "fpw4ai4nkypal1kv",
password: "bhsdcvqvfeznv7gz",
database: "fdty57vynjuj59f2"
});
module.exports = pool;
