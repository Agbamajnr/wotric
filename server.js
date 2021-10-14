const express = require('express')
const mongoose = require('mongoose')
const morgan  = require('morgan')
const ejs = require('ejs')
const Book = require('./models/books')
const bookRouter = require('./routes/books');

const app = express();

//connect mongodb
const dbURI = 'mongodb+srv://agbamajnr:brainbox@learn-node.tv0ge.mongodb.net/poem-app?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
   .then((result) => app.listen(process.env.PORT || 3000))
   .catch((err) => console.log(err));
const cn = mongoose.connection
cn.once('open', () => console.log('database connected'));
//settings
   app.set('view engine', 'ejs')

   //middlewares
   app.use(express.static('public'))
   app.use(morgan('dev'))
   app.use(express.urlencoded({ extended: true}))

   //basic routing

   app.get('/', (req, res) => {
       res.redirect('/books')
   })

   app.get('/about', (req, res) => {
       res.render('about', { title: 'About Bookies'})
   })

  
     //books routing
     app.use('/books', bookRouter);  


   //users routing
   app.get('/admin', (req, res) => {
       res.redirect('/admin/login');
   })

   app.get('/admin/login' , (req , res)=>{
   
      res.render('admin', { title: 'Admin Login'});
   
   })
   app.get('/library' , (req , res)=>{
   
    Book.find()
    .then(result => {
        res.render('library', { title: 'Library', books: result})
    }).catch(err => console.log(err))
   
   })

   app.use((req, res) => {
       res.send('<h1>Page does not exist</h1>')
   })