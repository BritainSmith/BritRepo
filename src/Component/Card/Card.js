import React, { Component } from "react";
import { Button } from "reactstrap";
import "./card.css";

export class Card extends Component {
  render() {
    return (
      <div key={this.props.index} className="movieCard">
        <img src={this.props.url} alt={this.props.title} />
        <h2>{this.props.title}</h2>

        <Button
          key={this.props.index}
          onClick={this.props.handleClick}
          className="button"
        >
          {this.props.buttonName}
        </Button>
      </div>
    );
  }
}
