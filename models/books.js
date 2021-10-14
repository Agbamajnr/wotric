
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const bookSchema = new Schema(
    {
        author:{
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        body: {
            type: String,
            required: true
        }
    }, {timestamps: true}
);

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;