const express = require('express')
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
<<<<<<< HEAD
const fs = require('fs');
const path = require('path');
const port = 9000


const database = require('./services/database')
const homepageRoute = require('./routes/homepage.route')
const shopRoute = require('./routes/shop.route')
const adminRoute = require('./routes/admin.route')
=======
const port = 3000


const database = require('./services/database')
const homepageRouter = require('./routes/homepage.route')
const blackpinkRouter = require('./routes/blackpink.route') // variables to get the route of every categories
const btsRouter = require('./routes/bts.route')
const exoRouter = require('./routes/exo.route')
const twiceRouter = require('./routes/twice.route')
const redvelvetRouter = require('./routes/redvelvet.route')
const momolandRouter = require('./routes/momoland.route')
>>>>>>> d24f10696d5bb0d95b201439408306fb93c69e8b


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'ejs')
mongoose.set('useCreateIndex', true);
app.use('/public', express.static('public'));


<<<<<<< HEAD
app.use('/', homepageRoute);
app.use('/admin', adminRoute)
app.use(shopRoute)

=======
app.use('/', homepageRouter); // use the routes of every pages in the categories
app.use('/', blackpinkRouter);
app.use('/',btsRouter);
app.use('/',exoRouter);
app.use('/',twiceRouter);
app.use('/',redvelvetRouter);
app.use('/',momolandRouter);
>>>>>>> d24f10696d5bb0d95b201439408306fb93c69e8b

database.connect();

app.listen(port, () => {
    console.log(`Server listening at port ${port}`)
})
