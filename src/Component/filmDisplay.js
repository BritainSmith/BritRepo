import axios from "axios";
import React, { Component } from "react";
import { Card } from "./Card/Card";
import { MovieDetails } from "./Card/MovieDetails";

class FilmDisplay extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      selectedMovie: -1,
      moviesText: "",
      pageStart: 0,
      pageEnd: 20
    };

    this.addToMovies = this.addToMovies.bind(this);
    this.removeFromMovies = this.removeFromMovies.bind(this);
  }

  selectMovie(index) {
    this.setState(prevState => {
      return { selectedMovie: index };
    });
  }

  updateMovies(id, movie) {
    axios
      .put(`http://localhost:3002/api/test/posts?id=${id}`, movie)
      .then(results => {
        this.setState({ movies: results.data });
      });
  }

  addToMovies(movie) {
    axios.post(`http://localhost:3002/api/test`, movie).then(results => {
      this.setState({ movies: results.data });
    });
  }

  removeFromMovies(id) {
    axios.delete(`http://localhost:3002/api/test/${id}`).then(response => {
      this.setState({ movies: response.data });
    });
  }

  renderSelectedMovie() {
    let movieIndex = this.state.selectedMovie;
    if (movieIndex >= 0) {
      return <MovieDetails movie={this.props.movies[movieIndex]} />;
    }
  }

  renderMovies() {
    return this.props.movies.map((movie, index) => {
      return (
        <Card
          key={index}
          title={movie.title}
          description={movie.description}
          url={movie.url}
          index={index}
          handleClick={e => this.selectMovie(index)}
          buttonName="View Details"
        />
      );
    });
  }

  render() {
    return (
      <div className="movie">
        {this.renderMovies()}
        <h2>DETAILS</h2>
        {this.renderSelectedMovie()}
      </div>
    );
  }
}

export default FilmDisplay;
