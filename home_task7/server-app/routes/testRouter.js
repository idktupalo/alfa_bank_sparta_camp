const Router = require('express')
const router = new Router()
const testController = require('../controllers/TestController')

router.get('/json', testController.getAllJsonData)

module.exports = router
