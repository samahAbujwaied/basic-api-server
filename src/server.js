'use strict';

const express = require('express');
const notFoundHandler = require('./errorHandlers/404');
const errorHandler = require('./errorHandlers/500');
const productsRoutes = require('./routes/products');
const categoriesRouter = require('./routes/categories')
const app = express();
const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => { res.send("hello world");});

app.use(express.json()); 
app.use(productsRoutes);
app.use(categoriesRouter);
app.use('*', notFoundHandler);
app.use(errorHandler);

function start(port) {
    app.listen(port, ()=> console.log(`Will run on port ${port}`))
}



module.exports = {
    app: app,
    start: start
}