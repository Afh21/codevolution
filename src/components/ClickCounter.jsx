import React, { Component } from "react";
import UpdateComponent from "./WithCounter";

class ClickCounter extends Component {
  render() {
    const { count, handlerIncrement, name } = this.props;
    return (
      <div>
        <p>{name}</p>
        <button onClick={handlerIncrement}>Clicks - {count} - times</button>
      </div>
    );
  }
}

export default UpdateComponent(ClickCounter, 5);
