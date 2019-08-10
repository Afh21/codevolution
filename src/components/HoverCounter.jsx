import React, { Component } from "react";
import UpdateComponent from "./WithCounter";

class HoverCounter extends Component {
  render() {
    const { count, handlerIncrement } = this.props;
    return (
      <div>
        <h3 onMouseOver={handlerIncrement}>Hovered {count} times</h3>
      </div>
    );
  }
}

export default UpdateComponent(HoverCounter, 10);
