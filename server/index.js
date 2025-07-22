const express = require("express")
const connectTOdb = require("./db/db")
const cors = require("cors")
const bookRouter = require("./routes/book.router")

require("dotenv").config()
const app = express()
app.use(express.json())
app.use(cors())

app.use("/api/book/", bookRouter)



app.listen(process.env.PORT, async() => {
    try {
        await connectTOdb();
        console.log("Server is running")
    } catch (error) {
        console.error("Connection Error:", error);
        // alert("⚠️ Could not connect to the server. Please try again in a few moments.");
    }
})