import React, { Component } from "react";

export class MovieDetails extends Component {
  render() {
    let { movie } = this.props;
    return (
      <div className="moviedetail">
        <h1>{movie.title}</h1>
        <h2>{movie.director}</h2>
        <h2>{movie.producer}</h2>
        <p>{movie.description}</p>
      </div>
    );
  }
}
