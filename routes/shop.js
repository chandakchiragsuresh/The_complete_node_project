const express = require('express')

const router = express.Router()

const path = require('path')

const productController = require('../controllers/productController')

const products = productController.products
 
router.get('/', productController.shopController)

module.exports = router