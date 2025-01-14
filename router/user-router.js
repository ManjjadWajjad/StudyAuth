const express = require('express')
const userController = require('../controllers/user-controller')

const router = express.Router()

router.post('/siswa',userController.userRegistration)

module.exports=router