const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const {
  getMovies,
  getSingleMovie,
  addMovie,
  deleteMovie,
  updateMovie
} = require("./GhibliCtrl");

const app = express();
const port = 3002;

app.use(json());
app.use(cors());

const moviesBaseUrl = "/api/test";

app.get(moviesBaseUrl, getMovies);
app.get(`${moviesBaseUrl}/:id`, getSingleMovie);
app.post(moviesBaseUrl, addMovie);
app.delete(`${moviesBaseUrl}/:id`, deleteMovie);
app.put(`${moviesBaseUrl}/:id`, updateMovie);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
