import React, { Component } from "react";
// import RegComponent from "./RegComponent";
// import PureComponentExample from "./PureComponentExample";
import MemoComponent from "./MemoComponent";

class ParentComponentPure extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Industrys AFH"
    };
  }

  componentDidMount = _ => {
    setInterval(() => {
      this.setState({ name: "Andrés F. Hoyos" });
    }, 2000);
  };

  render() {
    console.log("***********Parent Component**********");
    return (
      <div>
        Parent Component Pure
        {/* <RegComponent name={this.state.name} /> */}
        {/* <PureComponentExample name={this.state.name} /> */}
        <MemoComponent name={this.state.name} />
      </div>
    );
  }
}

export default ParentComponentPure;
