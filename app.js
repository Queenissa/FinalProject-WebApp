const express = require('express')
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const port = 9000


const database = require('./services/database')
const homepageRoute = require('./routes/homepage.route')
const shopRoute = require('./routes/shop.route')
const adminRoute = require('./routes/admin.route')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'ejs')
mongoose.set('useCreateIndex', true);
app.use('/public', express.static('public'));


app.use('/', homepageRoute);
app.use('/admin', adminRoute)
app.use(shopRoute)


database.connect();

app.listen(port, () => {
    console.log(`Server listening at port ${port}`)
})
