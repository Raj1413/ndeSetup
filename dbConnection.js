const mongoose = require('mongoose');
require('dotenv').config();
const connect1 = mongoose.connection;

const connection = () => mongoose.connect(process.env.DATABASE_PATH, {useNewUrlParser: true, useUnifiedTopology: true});
const connectOn = () => connect1.on("error",error=>console.error(error))
const connectOnce = () => connect1.once("open",()=>console.log("database connected"))




module.exports = {connection,connectOn,connectOnce};