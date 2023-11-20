const express = require('express')
const{ registerUser, findUsers} = require('../controller/userController')
const{ authUser} = require('../controller/userController')
const { protect } = require('../middleware/authenticatiionUser')
const router = express.Router()

router.route('/').post(registerUser).get(protect,findUsers)
router.post('/login',authUser)
module.exports = router;