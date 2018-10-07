import React from "react";

class Button extends React.Component {
  render() {
    return (
      <button className="button button-primary">
        <i className="fa fa-chevron-right" /> Add to favorites
      </button>
    );
  }
}

export default Button;
