'use strict';
require('dotenv').config();

const server = require('./src/server');
const {db} = require('./src/models/index'); 

db.sync().then(()=> {
    server.start( 8080);
})
.catch(console.error);
