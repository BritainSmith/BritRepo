import React, { Component } from "react";
import { FormGroup, Input, Label } from "reactstrap";

export class MovieInput extends Component {
  render() {
    return (
      <FormGroup>
        <Label>{this.props.label}: </Label>
        <Input
          type="text"
          id={this.props.id}
          className="form-control form-control-sm"
          value={this.props.value}
          onChange={this.props.handleChange}
        />
      </FormGroup>
    );
  }
}
