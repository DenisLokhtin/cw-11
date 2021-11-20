const express = require('express');
const Category = require('../models/Category');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const categories = await Category.find();
    res.send(categories);
  } catch (e) {
    res.sendStatus(500);
  }
});

router.post('/', async (req, res) => {
  if (!req.body.category) {
    return res.status(400).send('Data not valid');
  }

  const categoryData = {
    category: req.body.category
  };

  const category = new Category(categoryData);

  try {
    await category.save();
    res.send(category);
  } catch (e) {
    res.status(400).send(e);
    console.log(e)
  }
});

module.exports = router;