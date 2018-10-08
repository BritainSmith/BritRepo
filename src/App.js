import React, { Component } from "react";
import "./App.css";
import FilmDisplay from "./Component/filmDisplay";
import { Button } from "reactstrap";
import { MovieForm } from "./Component/MovieForms";
import Easteregg from "./Component/Easteregg";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showCreateForm: false,
      movies: [],
      selected: -1
    };
    this.submitForm = this.submitForm.bind(this);
    this.addToMovies = this.addToMovies.bind(this);
    this.removeFromMovies = this.removeFromMovies.bind(this);
    this.updateMovies = this.updateMovies.bind(this);
    this.updateMovieForm = this.updateMovieForm.bind(this);
  }

  updateMovies(movie) {
    console.log(movie);
    let id = this.state.movies[this.state.selected].id;

    axios.put(`http://localhost:3002/api/test/${id}`, movie).then(results => {
      this.setState({
        movies: results.data,
        showCreateForm: false,
        selected: -1
      });
    });
  }

  addToMovies(movie) {
    axios.post(`http://localhost:3002/api/test`, movie).then(results => {
      this.setState({ movies: results.data });
    });
  }

  removeFromMovies(index) {
    //need to add error checking for nulls
    let id = this.state.movies[index].id;
    axios.delete(`http://localhost:3002/api/test/${id}`).then(response => {
      this.setState({ movies: response.data });
    });
  }

  componentDidMount() {
    axios.get("http://localhost:3002/api/test").then(response => {
      console.log(response);
      this.setState({ movies: response.data });
    });
  }

  createMovie() {
    this.setState({ showCreateForm: true });
  }

  submitForm(movie) {
    this.addToMovies(movie);
    this.setState(prevState => {
      return { movies: [...prevState.movies, movie], showCreateForm: false };
    });
    console.log(movie);
  }

  updateMovieForm(index) {
    this.setState({ showCreateForm: true, selected: index });
  }

  handleEasteregg() {
    return (
      alert("you shouldnt be here..."),
      (
        <img
          className="easteregg"
          src="http://cdn.shopify.com/s/files/1/1158/9490/products/C000001182-PAR-ZOOM_f7cf5241-a203-4e3e-8de9-c3556b7346f5_800x.jpeg?v=1524405066"
        />
      )
    );
  }

  renderCreateForm() {
    if (this.state.showCreateForm) {
      if (this.state.selected > -1) {
        let movie = this.state.movies[this.state.selected];
        return (
          <MovieForm
            handleSubmit={this.updateMovies}
            title={movie.title}
            description={movie.description}
            director={movie.director}
            producer={movie.producer}
            url={movie.url}
            id={movie.id}
          />
        );
      }
      return <MovieForm handleSubmit={this.submitForm} />;
    } else {
      return (
        <div>
          <h1 className="title">Studio Ghibli Movie Editor</h1>
          <Button className="button" onClick={e => this.createMovie()}>
            Create New Movie
          </Button>
          <FilmDisplay
            className="movie"
            movies={this.state.movies}
            deleteMovie={this.removeFromMovies}
            updateMovie={this.updateMovieForm}
          />
          <Easteregg egg={this.handleEasteregg} />
        </div>
      );
    }
  }

  render() {
    return <div className="App">{this.renderCreateForm()}</div>;
  }
}
export default App;
