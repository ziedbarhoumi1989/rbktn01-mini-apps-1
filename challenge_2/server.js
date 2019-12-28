var express = require('express')
var path = require('path')
var fs = require('fs')
var bodyParser = require('body-parser')
var app = express()
var port = process.env.port || 5000
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use('/', express.static('client'))

app.post('/data', (req, res) => {
    var parsed = JSON.parse(req.body.data)
    //console.log(Object.keys(JSON.parse(req.body.data)))
    var arr = Object.keys(parsed).join(',')


    fs.appendFile('users/file.csv', arr + '\n', (err) => {
        if (err) {
            console.log(err)
        }
        console.log("wrote file")
    })
    var b = function (obj) {
        var arr = Object.values(obj)
        arr.splice(arr.length - 1, 1)
        console.log(arr)

        fs.appendFile('./users/file.csv', arr.join(',') + '\n', err => {
            if (err) {
                console.log(err)
            }
        })



        for (child of obj.children) {
            b(child)
        }

    }

    //res.sendFile('./users/file.csv')




    b(parsed)


    res.sendFile('file.csv', { root: path.join(__dirname, './users') }, err => {
        if (err) console.log(err)
    });
})
app.listen(port, () => console.log(`listening on port ${port}......`))

