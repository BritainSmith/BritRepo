var images = require("./image").images;

const axios = require("axios");

var addedMovies = [];

var movies = [];

function getMovie(req, res, next) {
  axios
    .get("https://ghibliapi.herokuapp.com/films")
    .then(response => {
      movies = addedMovies.concat(response.data);
      movies = movies.map(movie => addImageToMovie(movie));
      res.status(200).send(movies);
    })
    .catch(err => res.status(500).send(err));
}

function addImageToMovie(movie) {
  var img = images.find(image => image.title === movie.title);
  img = img === undefined ? { url: "none" } : img;
  movie.url = img.url;
  return movie;
}

function addMovie(req, res, next) {
  addedMovies.push(req.query.newMovie);
  res.status(200).send(movies);
}

function deleteMovie(req, res, next) {
  let removed = movies.splice(req.params.deleteIndex, 1);
  res.status(200).send(movies);
}

module.exports = {
  getMovie,
  addMovie,
  deleteMovie
};
