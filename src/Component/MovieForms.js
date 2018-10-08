import React, { Component } from "react";
import { Button, Form, Label } from "reactstrap";
import { MovieInput } from "./MovieInput";

export class MovieForm extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: "",
      director: "",
      producer: "",
      url: "",
      id: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(prevState, prevProps) {
    if (prevProps != this.props) {
      this.setState({
        title: this.props.title,
        description: this.props.description,
        director: this.props.director,
        producer: this.props.producer,
        url: this.props.url,
        id: this.props.id
      });
    }
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  renderInputFields() {
    let movie = Object.getOwnPropertyNames(this.state);
    return movie.map((field, index) => {
      return (
        <MovieInput
          className="movieinput"
          key={index}
          label={field.charAt(0).toUpperCase() + field.substr(1)}
          id={field}
          value={this.state[field]}
          handleChange={this.handleChange}
        />
      );
    });
  }

  render() {
    return (
      <Form>
        {this.renderInputFields()}
        <Button
          className="submit"
          onClick={() => this.props.handleSubmit(this.state)}
        >
          Submit
        </Button>
      </Form>
    );
  }
}
