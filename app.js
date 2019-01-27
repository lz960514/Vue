const express = require('express')

const app = express()

const port = 5200

const path = require('path')

app.use('/node_modules', express.static(path.resolve(__dirname, './node_modules')))

app.use('/js', express.static(path.resolve(__dirname, './js')))

app.use('/public', express.static(path.resolve(__dirname, './public')))

const indexRouter = require('./routers/index')

app.use('/', indexRouter)

// app.get('/', (req, res, next) => {
//     res.sendFile(path.resolve(__dirname, './views/index.html'))
// })

app.listen(port, err => {
    if (err) throw err;
    console.log(`服务器启动于: http://localhost:${port}`);
});