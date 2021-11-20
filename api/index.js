const express = require('express');
const cors = require('cors');
const products = require('./app/products');
const categories = require('./app/categories');
const users = require('./app/users');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/public', express.static('public'));

const port = 8000;

app.use('/products', products);
app.use('/categories', categories);
app.use('/users', users);

const run = async () => {
  await mongoose.connect(config.db.url);

  app.listen(port, () => {
    console.log(`Server started on ${port} port!`);
  });

};

run().catch(e => console.error(e));