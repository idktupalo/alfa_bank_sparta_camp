const express = require('express')
const router = require('./routes/index')
const cors = require('cors')

const PORT = process.env.PORT || 5000

const app = express()

// app.use(express.json({ extended: true }))
app.use(cors())
app.use('/api', router)

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server has been started on port ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()
