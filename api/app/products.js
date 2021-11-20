const express = require('express');
const multer = require('multer');
const path = require('path');
const {nanoid} = require('nanoid');
const config = require('../config');
const Product = require('../models/Product');
const auth = require("../middleware/auth");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, config.uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, nanoid() + path.extname(file.originalname));
  }
});

const upload = multer({storage});

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const query = {};

    if (req.query.category) {
      query.category = req.query.category;
    }

    const products = await Product.find(query).populate('category', 'title description');
    res.send(products);
  } catch (e) {
    res.sendStatus(500);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.send(product);
    } else {
      res.status(404).send({error: 'Product not found'});
    }
  } catch {
    res.sendStatus(500);
  }
});

router.post('/', upload.single('file'), async (req, res) => {
  if (!req.body.title || !req.body.price || !req.body.category) {
    return res.status(400).send({error: 'Data not valid'});
  }

  const productData = {
    title: req.body.title,
    price: req.body.price,
    category: req.body.category
  };

  if (req.file) {
    productData.file = req.file.filename;
  }

  if (req.body.description) {
    productData.description = req.body.description;
  }

  const product = new Product(productData);

  try {
    await product.save();
    res.send(product);
  } catch {
    res.status(400).send({error: 'Data not valid'});
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (product) {
      res.send(`Product '${product.title} removed'`);
    } else {
      res.status(404).send({error: 'Product not found'});
    }
  } catch (e) {
    res.sendStatus(500);
  }
});

module.exports = router;