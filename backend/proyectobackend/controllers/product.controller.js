// controllers/product.controller.js

const Product = require('../models/product');
const productCtrl = {};

productCtrl.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(400).json({
      status: '0',
      msg: 'Error processing the operation',
    });
  }
};

productCtrl.createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.json({
      status: '1',
      msg: 'Product saved.',
    });
  } catch (error) {
    res.status(400).json({
      status: '0',
      msg: 'Error processing the operation',
    });
  }
};
productCtrl.getFeaturedProducts = async (req, res) => {
    try {
      const featuredProducts = await Product.find({ destacado: true });
      res.json(featuredProducts);
    } catch (error) {
      res.status(400).json({
        status: '0',
        msg:'Error procesando la operación'
    });
    }
    };
    
    productCtrl.getProduct = async (req, res) => {
    try {
    const product = await Product.findById(req.params.id);
    if (product) {
    res.json(product);
    } else {
    res.status(404).json({
    status: '0',
    msg: 'Product not found',
    });
    }
    } catch (error) {
    res.status(400).json({
    status: '0',
    msg: 'Error processing the operation',
    });
    }
    };
    
    productCtrl.updateProduct = async (req, res) => {
    try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (updatedProduct) {
    res.json({
    status: '1',
    msg: 'Product updated',
    });
    } else {
    res.status(404).json({
    status: '0',
    msg: 'Product not found',
    });
    }
    } catch (error) {
    res.status(400).json({
    status: '0',
    msg: 'Error processing the operation',
    });
    }
    };
    
    productCtrl.deleteProduct = async (req, res) => {
    try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (deletedProduct) {
    res.json({
    status: '1',
    msg: 'Product removed',
    });
    } else {
    res.status(404).json({
    status: '0',
    msg: 'Product not found',
    });
    }
    } catch (error) {
    res.status(400).json({
    status: '0',
    msg: 'Error processing the operation',
    });
    }
    };
    
    module.exports = productCtrl;