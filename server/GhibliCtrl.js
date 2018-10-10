var images = require("./image").images;
var uuid = require("uuid");

const axios = require("axios");

var madeApiCall = false;

var movies = [];

var id = 0;

function getSingleMovie(req, res) {
  if (!madeApiCall) {
    getMovies(req, res);
  }
  let updateId = req.params.id;
  const movieIndex = findMovie(updateId);
  let movie = "could not find a movie";

  if (movieIndex >= 0) {
    movie = movies[movieIndex];
  }
  res.status(200).send(movie);
}

function getMovies(req, res) {
  if (!madeApiCall) {
    axios
      .get("https://ghibliapi.herokuapp.com/films")
      .then(response => {
        movies = response.data;
        movies = movies.map(movie => addImageToMovie(movie));
        res.status(200).send(movies);
      })
      .catch(err => res.status(500).send(err));
    madeApiCall = true;
  } else {
    console.log("already fetched...");
    res.status(200).send(movies);
  }
}

function getSetOfMovies(req, res) {
  var numOfMovies = req.query.numMovies;
  console.log("The number of movies is", numOfMovies);
  if (!madeApiCall) {
    getMovies(req, res);
  }
  var filteredMovies = movies.slice(0, numOfMovies);
  res.status(200).send(filteredMovies);
}

function addMovie(req, res, next) {
  madeApiCall = true;
  let movie = req.body;
  console.log(movie);
  movie.id = uuid.v4();
  movies.push(movie);
  res.status(200).send(movies);
}

function updateMovie(req, res) {
  let updatedMovie = req.body;
  let updateId = req.params.id;

  const movieIndex = findMovie(updateId);
  let movie = movies[movieIndex];

  movies[movieIndex] = {
    id: movie.id,
    title: updatedMovie.title,
    description: updatedMovie.description,
    director: updatedMovie.director,
    producer: updatedMovie.producer,
    release_date: updatedMovie.release_date,
    url: updatedMovie.url
  };

  res.status(200).send(movies);
}

function deleteMovie(req, res) {
  const deleteId = req.params.id;
  const movieIndex = findMovie(deleteId);
  if (movieIndex >= 0) movies.splice(movieIndex, 1);
  res.status(200).send(movies);
}

function findMovie(id) {
  return movies.findIndex(movie => movie.id === id);
}

function addImageToMovie(movie) {
  var img = images.find(image => image.title === movie.title);
  img = img === undefined ? { url: "none" } : img;
  movie.url = img.url;
  return movie;
}

module.exports = {
  getMovies,
  getSingleMovie,
  addMovie,
  updateMovie,
  deleteMovie,
  getSetOfMovies
};
