import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Andres Felipe"
    };

    console.log("Lifecycle constructor");
  }

  // For Mounting and Updating
  static getDerivedStateFromProps(props, state) {
    console.log("Lifecycle getDerivedState");
    return null;
  }

  componentDidMount = _ => console.log("Lifecycle componentDidMount");

  // Updating
  shouldComponentUpdate = _ => {
    console.log("Lifecycle shouldComponentUpdate");
    return true;
  };

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log("Lifecycle getSnapshotBeforeUpdate");
    return null;
  };

  componentDidUpdate = _ => console.log("Lifecycle componentDidUpdate");

  changeState = _ => this.setState({ name: "Emilia Hoyos" });

  render() {
    console.log("Lifecycle render");
    return (
      <div>
        <p> Hola LyfeCicle A - {this.state.name} </p>
        <button onClick={this.changeState}>Change state</button>
        <br />
        <br />
        <LifeCycleB />
      </div>
    );
  }
}

export default LifeCycleA;
