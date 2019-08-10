import React, { Component } from "react";

class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Andres Felipe"
    };

    console.log("LifecycleB constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleB getDerivedState");
    return null;
  }

  componentDidMount = _ => console.log("LifecycleB componentDidMount");

  // Updating
  shouldComponentUpdate = _ => {
    console.log("LifecycleB shouldComponentUpdate");
    return true;
  };

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log("LifecycleB getSnapshotBeforeUpdate");
    return null;
  };

  componentDidUpdate = _ => console.log("LifecycleB componentDidUpdate");

  render() {
    console.log("LifecycleB render");
    return <div> Hola LyfeCicle B </div>;
  }
}

export default LifeCycleB;
