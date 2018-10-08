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
      url: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    console.log(this.state);
  }

  renderInputFields() {
    let movie = Object.getOwnPropertyNames(this.state);
    return movie.map((field, index) => {
      return (
        <MovieInput
          key={index}
          label={field.charAt(0).toUpperCase() + field.substr(1)}
          id={field}
          value={this.props[field]}
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
          className="button
        "
          onClick={() => this.props.handleSubmit(this.state)}
        >
          Create
        </Button>
      </Form>
    );
  }
}
