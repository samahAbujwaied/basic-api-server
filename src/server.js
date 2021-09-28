'use strict';

const express = require('express');
const notFoundHandler = require('./errorHandlers/404');
const errorHandler = require('./errorHandlers/500');

const productsRoutes = require('./routes/products');
const categoriesRouter = require('./routes/categories')
const app = express();

app.use(express.json()); 
app.use(productsRoutes);
app.use(categoriesRouter);

function start(port) {
    app.listen(port, ()=> console.log(`Will run on port ${port}`))
}

app.get('/',(req,res)=>{
    res.send('Wellcome on our store');
})
app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
    app: app,
    start: start
}