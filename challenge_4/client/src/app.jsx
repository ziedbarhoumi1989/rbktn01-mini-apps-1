import React from "react";
import ReactDOM from "react-dom";

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "grey",
      width: 50 + "px",
      height: 50 + "px",
      margin: 20 + "px",
      display: "inline-block",
      borderRadius: "50%",
      borderColor: "red"
    };
  }
  handleClick() {
    this.setState({ backgroundColor: "red" });
  }
  render() {
    return (
      <div
        data-x={this.props.x}
        data-y={this.props.y}
        style={this.state}
        onClick={this.handleClick.bind(this)}
      ></div>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {};
  }
  handleClick() {
    this.setState({ backgroundColor: "red" });
  }
  render() {
    var arr = [];
    for (var i = 0; i < 6; i++) {
      for (var j = 0; j < 7; j++) {
        arr.push(
          <Square
            x={i}
            y={j}
            key={i + "-" + j}
            handleClick={this.handleClick}
          ></Square>
        );
      }
    }

    return <div>{arr}</div>;
  }
}
ReactDOM.render(<Board />, document.getElementById("container"));
