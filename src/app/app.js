const express = require('express')
const apiRouter = require('../routes/api')
const { errorMiddleware } = require('../middleware/error-middleware')
const app = express()

app.use(express.json())
app.use(express.urlencoded({
    extended: false,
}))

app.use(apiRouter)

app.use(errorMiddleware)

module.exports = app