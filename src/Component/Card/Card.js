import React, { Component } from "react";
import Button from "../Button";
import "./card.css";

export class Card extends Component {
  render() {
    return (
      <div key={this.props.index} className="movieCard">
        <img src={this.props.url} alt={this.props.title} />
        <h2>{this.props.title}</h2>
        <h3>{this.props.description}</h3>
        <Button />
      </div>
    );
  }
}
