'use strict';
require('dotenv').config();

const server = require('./src/server');
const {db} = require('./src/models/index'); 
const port = process.env.PORT || 8080
db.sync().then(()=> {
    server.start( port);
})
.catch(console.error);
