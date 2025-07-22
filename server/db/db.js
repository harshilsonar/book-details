const mongoose = require("mongoose")
require("dotenv").config()

async function connectTOdb() {
    try {
        await mongoose.connect(process.env.MONGO_URL + "Book-store")
        console.log("Connected to Database")
    } catch (error) {
        console.error("Connection Error:", error);
    }
}

module.exports = connectTOdb;