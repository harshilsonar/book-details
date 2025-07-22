const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    author: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    img: {
        type: String,
        default: "https://s3.amazonaws.com/marstranslation.aws.bucket/cms/default/0027/47/bdf8f09fb08c9d275273778c3c5f3079a9786dd8.webp"
    },

    ISBM: {
        type: Number,
        required: true
    }
})

const book = new mongoose.model("Books", bookSchema)

module.exports = book;