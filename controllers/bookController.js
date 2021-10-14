const Book = require('../models/books');
const fs = require('fs');

const book_index = (req, res) => {
    Book.find()
        .then(result => {
            res.render('index', { title: 'Homepage', books: result})
        }).catch(err => console.log(err))
}

const book_create = (req, res) => {
    res.render('create', { title: 'Add new blogs'})
}

const book_post_create = (req, res) => {
    const book = new Book (req.body)

    book.save()
        .then(result => {
            console.log(result)
            res.redirect('/books')
        })
        .catch(err => {
            console.log(err);
        })
}

const book_get_id = (req, res) => {
    const id = req.params.id;
    
    Book.findById(id)
        .then(result => {
            res.render('poem', { book: result, title: result.title})
        }).catch(err => {
            console.log(err)
        })
}

const book_del_id = (req, res) => {
    const id = req.params.id;
    Book.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/books'});
        })
}
module.exports = {
    book_index,
    book_create,
    book_post_create,
    book_get_id,
    book_del_id
}