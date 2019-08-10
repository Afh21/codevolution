import React, { Component } from "react";

class RefsDemo extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  componentDidMount = () => this.inputRef.current.focus();

  clickHandler = _ => alert(this.inputRef.current.value);

  render() {
    return (
      <div>
        <input type='text' name='' id='' ref={this.inputRef} />
        <button onClick={this.clickHandler}>Click me!</button>
      </div>
    );
  }
}

export default RefsDemo;
