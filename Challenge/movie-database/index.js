const express = require('express')
const app = express()
const port = 3000
const today = new Date(); 
const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

app.get('/', (req, res) => res.send('ok'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/test', (req, res) => res.send({status:200, message:"ok"}))

app.get('/time', (req, res) => res.send({status:200, message: time}))