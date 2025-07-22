const express = require("express")
const bookController = require("../controller/book.controller")
const bookRouter = express.Router()


bookRouter.get("/test", bookController.test)
bookRouter.get("/books", bookController.books)
bookRouter.post("/addbook", bookController.Addbook)
bookRouter.put("/updatebook/:id", bookController.updatebook)
bookRouter.delete("/delete/:id", bookController.deletebook)
bookRouter.get("/detail/:id", bookController.getbookbyid)
bookRouter.get("/:id", bookController.getbookbyid)

module.exports = bookRouter