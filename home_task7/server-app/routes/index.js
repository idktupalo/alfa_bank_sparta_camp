const Router = require('express')
const router = new Router()

const testRouter = require('./testRouter')

router.use('/', testRouter)

module.exports = router
