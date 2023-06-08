// routes/product.route.js

const express = require('express');
const router = express.Router();
const productCtrl = require('../controllers/product.controller');

// Routes
router.get('/', productCtrl.getAllProducts);
router.post('/', productCtrl.createProduct);
router.get('/featured', productCtrl.getFeaturedProducts);
router.get('/:id', productCtrl.getProduct);
router.put('/:id', productCtrl.updateProduct);
router.delete('/:id', productCtrl.deleteProduct);

module.exports = router;
