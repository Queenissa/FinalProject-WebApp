const express = require('express')
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = 4000


const database = require('./services/database')
const homepageRouter = require('./routes/homepage.route')
const adminRouter = require('./routes/admin.route')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'ejs')
mongoose.set('useCreateIndex', true);
app.use('/public', express.static('public'));


app.use('/', homepageRouter); // use the routes of every pages in the categories
app.use('/admin', adminRouter)


database.connect();

app.listen(port, () => {
    console.log(`Server listening at port ${port}`)
})
