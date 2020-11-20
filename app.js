const express = require('express')
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = 9000

app.set('view engine', 'ejs')
app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({urlencoded:true}))


app.get('/', async(req, res) => {
    res.render('partials/header');
})


app.listen(port, () => {
    console.log(`Server listening at port ${port}`)
})
