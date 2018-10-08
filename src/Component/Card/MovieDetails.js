import React, { Component } from "react";

export class MovieDetails extends Component {
  render() {
    let { movie } = this.props;
    return (
      <div className="movie-detail">
        <h2>{movie.title}</h2>
        <p>{movie.director}</p>
        <p>{movie.producer}</p>
        <p>{movie.description}</p>
      </div>
    );
  }
}
