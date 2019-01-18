const express = require('express')

const app = express()

const port = 5200

const path = require('path')

app.use('/node_modules', express.static(path.resolve(__dirname, './node_modules')))

app.use('/js', express.static(path.resolve(__dirname, './js')))

app.use('/public', express.static(path.resolve(__dirname, './public')))

app.get('/', (req, res, next) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'))
})

app.listen(port)