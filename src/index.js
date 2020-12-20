/* @jsx createElement */
// default : React.createElement

import { Component, createElement, render } from "./react.js";

class YourTitle extends Component {
  render() {
    return <h1>This is h1 tag in YourTitle</h1>;
  }
}

function Title(props) {
  return (
    <div>
      <YourTitle />
      <h2>This is h2 tag</h2>
      <p>This is p tag</p>
    </div>
  );
}

render(<Title />, document.querySelector("#root"));
