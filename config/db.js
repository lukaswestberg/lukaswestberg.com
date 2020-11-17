const Mongoose = require('mongoose');
const config = require('./config');

let conURL = config.database.url
conURL = conURL.replace('<dbname>',config.database.dbName)
conURL = conURL.replace('<username>',config.database.username)
conURL = conURL.replace('<password>',config.database.password)

const connection = Mongoose.createConnection(conURL, {useNewUrlParser: true, useUnifiedTopology: true},function (err) {
    if(err){
        console.log('There was an issue connecting to the MongoDB');
    }
});


module.exports = connection;

