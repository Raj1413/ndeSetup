const express = require("express")
const app = express()
const expressLayouts = require("express-ejs-layouts")
const bodyParser = require('body-parser');
const {connection,connectOn,connectOnce} = require('./dbConnection')

// views
app.set('views',__dirname+'/views');
app.set('view engine', 'ejs');
// layouts
app.set("layout",'layout/layouts')
app.use(expressLayouts)

// static files
app.use('/static',express.static('public'))

// routes
require('./routes/route')(app);
// require('./app/routes/routes.js')(app);

// bodyParser
app.use(bodyParser.json())

// db connection
connection();
connectOn();
connectOnce();


app.listen(process.env.PORT || 3000)