import React from "react";

const UpdateComponent = (OriginalComponent, incrementNumber) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0
      };
    }

    incrementCount = _ =>
      this.setState(prevState => {
        return { count: prevState.count + incrementNumber };
      });

    render() {
      return (
        <OriginalComponent
          count={this.state.count}
          handlerIncrement={this.incrementCount}
          {...this.props}
        />
      );
    }
  }

  return NewComponent;
};

export default UpdateComponent;
