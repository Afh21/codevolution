import React, { Component } from "react";
import { UserConsumer } from "./userContext";

class ComponentF extends Component {
  render() {
    return (
      <div>
        <UserConsumer>
          {userName => {
            return <h4>Hello {userName}</h4>;
          }}
        </UserConsumer>
      </div>
    );
  }
}

export default ComponentF;
