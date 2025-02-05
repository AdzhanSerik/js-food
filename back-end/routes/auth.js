const express = require('express')
const router = express.Router()

const { getUsers, signIn, signUp } = require('../controllers/authController')

router.get('/getUsers', getUsers)
router.post('/signIn', signIn)
router.post('/signUp', signUp)

module.exports = router