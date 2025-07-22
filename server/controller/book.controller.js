const Book = require("../model/user.model")

const bookController = {
    test: (req, res) => {
        res.status(200).json({ message: "test Routes are working properly" })
    },

    Addbook: async (req, res) => {

        const { title, author, price, description, ISBM } = req.body

        if (!title || !author || !price || !description || !ISBM) {
            console.log("ALL FIELDS ARE REQUIRED")
            res.status(400).json({ message: "ALL FIELDS ARE REQUIRED" })
        }

        if (!req.body.ISBM === 10 || !req.body.ISBM === 13) {
            res.status(400).json({ message: "ISBM code should be 10 or 13" })
        }

        try {
            const book = new Book({ title, author, price, description, ISBM })
            await book.save()

            res.status(201).json({ message: "Book added Successfully" }, book)
        } catch (error) {
            res.status(500).json({ message: "Unable to add Book, Try again later" })
        }

    },

    books: async (req, res) => {
        try {
            const book = await Book.find()
            res.status(200).json({ message: "Books fetched Successfully", book })
        } catch (error) {
            res.status(500).json({ message: "Unable to fetch Data" }, error)
        }
    },

    updatebook: async (req, res) => {
        const { id } = req.params
        const { title, author, price, description, ISBM } = req.body

        try {
            const book = await Book.findByIdAndUpdate(id, { title, author, price, description, ISBM }, { new: true })
            res.status(200).json({ message: "Book Updated successfully", book })
        } catch (error) {

        }
    },

    deletebook: async (req, res) => {
        const { id } = req.params

        try {
            const book = await Book.findByIdAndDelete(id)
            res.status(200).json({ message: "Book Deleted Successfully", book })
        } catch (error) {
            res.status(500).json({ message: "Unable to delete book", error: error.message })
        }
    },

    getbookbyid: async (req, res) => {
        const { id } = req.params

        try {
            const book = await Book.findById(id)
            res.status(200).json({message: "Book found successfully", book})
        } catch (error) {
            res.status(500).json({message: "Book not found", error: error.message})
        }
    }
}

module.exports = bookController