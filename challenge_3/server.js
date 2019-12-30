const express = require('express')
const bodyParser = require('body-parser')
var app = express()
var port = process.env.port || 5000;
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use('/', express.static('public'))

app.get('/adduser', (req, res) => {
    console.log(req)
    res.send("hello")
})

app.get('/userAdress', (req, res) => {
    console.log(req)
    res.send(req.body)
})

app.post('/userAdress', (req, res) => {
    console.log(req.body)
    res.send(req.body)
})


app.listen(port, () => {
    console.log(`listening on port ${port}..........`)
})























const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/zied', function (err) {
    if (!err) {
        console.log('success')
    }
});