const express = require('express');
const ejs = require('ejs');

const app = express();
app.get('/',function  (req,res){
    res.render('index')
});

const PORT = process.env.PORT || 3000;
app.listen(3000, () => console.log('server running on PORT 3000'));