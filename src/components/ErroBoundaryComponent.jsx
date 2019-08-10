import React, { Component } from "react";

class ErroBoundaryComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError = err => {
    return {
      hasError: true
    };
  };

  componentDidCatch = (err, info) => {
    console.log("error", err);
    console.log("info", info);
  };

  render() {
    if (this.state.hasError) {
      return <h1>Something ocurred! </h1>;
    }

    return this.props.children;
  }
}

export default ErroBoundaryComponent;
