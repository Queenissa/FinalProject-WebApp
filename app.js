const express = require('express')
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = 9000


const database = require('./services/database')
const homepageRouter = require('./routes/homepage.route')
const blackpinkRouter = require('./routes/blackpink.route')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'ejs')
app.use('/public', express.static('public'));


app.use('/', homepageRouter);
app.use('/', blackpinkRouter);
database.connect();

app.listen(port, () => {
    console.log(`Server listening at port ${port}`)
})
