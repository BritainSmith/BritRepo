import axios from "axios";
import React, { Component } from "react";
import { Card } from "./Card/Card";

class FilmDisplay extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      moviesText: "",
      pageStart: 0,
      pageEnd: 20
    };

    this.handleMovies = this.handleMovies.bind(this);
    this.addToMovies = this.addToMovies.bind(this);
    this.removeFromMovies = this.removeFromMovies.bind(this);
  }

  componentDidMount() {
    axios.get("http://localhost:3002/api/test").then(response => {
      console.log(response);
      this.setState({ movies: response.data });
    });
  }

  handleMovies(e) {
    this.setState({ moviesTest: e.target.value });
  }

  addToMovies() {
    axios
      .post(`http://localhost:3002/api/test?newMovie=${this.state.moviesText}`)
      .then(response => {
        console.log(response.data.pop(), "from the server");
      });
  }

  removeFromMovies() {
    axios.delete(`http://localhost:3002/api/test/${1}`).then(response => {
      this.setState({ movies: response.data });
    });
  }

  render() {
    let moviesRendered = this.state.movies.map((movie, index) => {
      return (
        <Card
          title={movie.title}
          description={movie.description}
          url={movie.url}
          index={index}
        />
      );
    });

    console.log("Movie RENDER", moviesRendered);

    return (
      <div className="movie">
        {moviesRendered}
        <button onClick={this.removeFromMovies}> Delete</button>
      </div>
    );
  }
}

export default FilmDisplay;
