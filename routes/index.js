// Require Express and Router
const express = require('express');
const router = express.Router();


// Require Controller to use
const productController = require('../controllers/apiController');

// Routing the request
// Get Request For List of Products
router.get('/products',  productController.productList);
// Post Request For Create Product
router.post('/products/create', productController.productCreate);
// Delete Request For Delete Product
router.delete('/products/:id', productController.productDelete);
// Post Request For Update Product
router.post('/products/:id/update_quantity/?', productController.productUpdate);

// Exporting the Modules
module.exports = router;