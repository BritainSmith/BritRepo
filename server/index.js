const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const { getMovie, addMovie, deleteMovie } = require("./GhibliCtrl");

const app = express();
const port = 3002;

app.use(json());
app.use(cors());

app.get("/api/test", getMovie);
app.post("/api/test", addMovie);
app.delete("/api/test/:deleteIndex", deleteMovie);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
