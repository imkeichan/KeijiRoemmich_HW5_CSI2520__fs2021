const express = require('express');
const ejs = require('ejs');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public"));

app.get('/',function  (req,res){
    res.render('index')
});

app.get('/resume',function  (req,res){
    res.render('/html/resume')
});

app.get('/fun_facts',function  (req,res){
    res.render('/html/fun_facts_page')
});



const PORT = process.env.PORT || 3000;
app.listen(3000, () => console.log('server running on PORT 3000'));