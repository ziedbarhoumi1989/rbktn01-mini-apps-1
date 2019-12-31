const express = require('express')
const app = express()
app.use('/', express.static("./client/dist"))
const port = process.env.port || 5000;



app.listen(port, () => {
    console.log(`listening on port ${port}....`)
})
