const mongoose = require("mongoose");
require("dotenv").config();

const connectionDB = () => {
    mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("DB connected ")
    })
    .catch((error) => {
        console.log("DB connection failed");
        console.log(error)
        process.exit(1);
    })
}

module.exports = connectionDB;