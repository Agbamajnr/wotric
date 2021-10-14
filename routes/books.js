const { response } = require('express');
const express = require('express');
const bookController = require('../controllers/bookController.js')
const { result } = require('lodash');
const router = express.Router();




router.get('/books', (req, res) => {
    res.redirect('/');
})

router.get('/', bookController.book_index);


router.get('/create', bookController.book_create);

router.post('/', bookController.book_post_create);

router.get('/:id', bookController.book_get_id);

router.delete('/:id', bookController.book_del_id);



module.exports = router;