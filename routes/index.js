var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

let API_KEY = process.env.API_KEY;

// route GET pour récupérer les films de l'API

router.get('/movies', (req, res) => {

console.log("ma route")

    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      res.status(200).json({movies: data.results });
    });
   });


module.exports = router;


