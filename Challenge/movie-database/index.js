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



app.get('/movies/create', (req, res) => {
   const Year = req.query.year;
   const Rating = req.query.rating;
   var ratingB;

   if (Rating !== ""){
    ratingB= Rating
        }else{
    ratingB= 4
    }
    if (req.query.title !== "" && Year.length === 4 && Year !== NaN  ){
        movies.push({title: req.query.title, year: parseInt(Year), rating:parseInt(ratingB)})
        res.send({status:200, data: movies })
        } else{
        res.send({status:403, error:true, message:'you cannot create a movie without providing a title and a year'})}

        
    })

app.get('/movies/read', (req, res) => res.send({status:200, data: movies }))

app.get('/movies/read/by-date', (req, res) => res.send({status:200, data: movies.sort((a, b) => (b.year - a.year))}))

app.get('/movies/read/by-rating', (req, res) => res.send({status:200, data: movies.sort((a, b) => (b.rating - a.rating))}))

app.get('/movies/read/by-title', (req, res) => res.send({status:200, data: movies.sort(function(a, b){
    const x = a.title.toLowerCase();
    const y = b.title.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
})}))

app.get('/movies/read/id/:ID?', (req, res) => {
    if (req.params.ID > movies.length-1){
        res.send({status:404, error:true, message:'the movie <ID> does not exist'})
    }
    else if (req.params.ID !== undefined){
    res.send({status:200, data: movies[req.params.ID] })
    } else {
        res.send("Please enter movie ID")
    }})
    
app.get('/movies/update', (req, res) => res.send({}))

app.get('/movies/delete', (req, res) => res.send({}))

    