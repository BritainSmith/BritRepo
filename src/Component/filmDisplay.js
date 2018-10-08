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
  }

  selectMovie(index) {
    this.setState(prevState => {
      return { selectedMovie: index };
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
          delete={e => this.props.deleteMovie(index)}
          viewDetails={e => this.selectMovie(index)}
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
