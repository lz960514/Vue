const express = require('express');

const app = express();

const path = require('path');

const port = 5000;

const hostName = 'localhost';

app.use('/node_modules', express.static(path.resolve(__dirname, './node_modules')));

app.use('/js', express.static(path.resolve(__dirname, './js')));

app.get('/', (req, res, next) => {
    const file = path.resolve(__dirname, './views/index.html');
    res.sendFile(file);
});

app.listen(port, hostName, err => {
    if (err) throw err;
    console.log(`服务器启动于: http://${hostName}:${port}`);
})