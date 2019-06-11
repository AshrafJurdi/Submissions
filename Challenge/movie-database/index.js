const express = require('express')
const app = express()
const port = 3000
const today = new Date(); 
const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
const movies = [
    { title: 'Jaws', year: 1975, rating: 8 },
    { title: 'Avatar', year: 2009, rating: 7.8 },
    { title: 'Brazil', year: 1985, rating: 8 },
    { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
]


app.get('/', (req, res) => res.send('ok'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/test', (req, res) => res.send({status:200, message:"ok"}))

app.get('/time', (req, res) => res.send({status:200, message: time}))

app.get('/hello/:ID?', (req, res) => { 
    if (req.params.ID !== undefined){
    res.send({status:200, message:"Hello, " +req.params.ID})
}else {
    res.send({status:200, message:"Hello" })
}})

app.get('/search', (req, res) => { 
    if (req.query.s !== undefined && req.query.s !== "") {
    res.send({status:200, message:"ok", data:req.query.s})
}else {
    res.send({status:500, error:true, message:"you have to provide a search"})
}})



app.get('/movies/create', (req, res) => res.send({}))

app.get('/movies/read', (req, res) => res.send({status:200, data: movies }))

app.get('/movies/update', (req, res) => res.send({}))

app.get('/movies/delete', (req, res) => res.send({}))

    