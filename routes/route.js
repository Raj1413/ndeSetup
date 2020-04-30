const contact = require('./contact');
const dashbord = require('./dashbord');


module.exports = (app) => {
      app.use('/',dashbord);
      app.use('/contact',contact);
}