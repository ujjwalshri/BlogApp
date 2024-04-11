const path = require('path')
const express = require('express');
const userRoute = require('./routes/user');
const mongoose = require('mongoose');

const app = express();
const PORT = 8000;

//DB connection
mongoose.connect('mongodb://localhost:27017/blogify').then( e => console.log("mongo connected"));



app.set('view engine', 'ejs');
app.set('views',path.resolve('./views'));

app.use(express.urlencoded({extended:false}));

app.get('/' , (req, res)=>{
    res.render('home');
})

app.use('/user',userRoute);
app.listen(PORT, ()=> console.log(`server started at port ${PORT}`))