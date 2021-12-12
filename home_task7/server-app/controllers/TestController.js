const jsonDataFromBack = require('../model/data.json')

class TestController {
    async getAllJsonData(req, res) {
        try {
            const resData = Object.values(jsonDataFromBack)
            res.json({data:resData})
        } catch (e) {
            res.status(400).json('Something went wrong - json')
        }
    }
}

module.exports = new TestController()
