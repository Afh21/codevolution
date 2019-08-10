import React, { PureComponent } from "react";

class PureComponentExample extends PureComponent {
  render() {
    console.log("Pure Component");
    return <div>Pure component - {this.props.name}</div>;
  }
}

export default PureComponentExample;
