const express = require('express');
const route = express.Router();


route.get('/', function(req,res){
     res.render('./modules/contact.ejs')
});

module.exports = route;