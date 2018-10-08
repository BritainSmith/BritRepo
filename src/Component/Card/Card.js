import React, { Component } from "react";
import { Button } from "reactstrap";
import "./card.css";

/* TODO: REFACTOR THIS INTO A FUNCTIONAL COMPONENT */
export class Card extends Component {
  render() {
    return (
      <div key={this.props.index} className="movieCard">
        <img src={this.props.url} alt={this.props.title} />
        <h2>{this.props.title}</h2>

        <Button
          key={this.props.index}
          onClick={this.props.viewDetails}
          className="button"
        >
          View Details
        </Button>
        <Button onClick={this.props.delete} className="button">
          Delete
        </Button>
        <Button onClick={this.props.update} className="button">
          Update
        </Button>
      </div>
    );
  }
}
