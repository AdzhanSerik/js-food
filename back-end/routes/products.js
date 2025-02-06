const express = require('express')
const router = express.Router()

const { getAllProducts } = require('../controllers/productsController')

router.get('/getAllProducts', getAllProducts)

module.exports = router