/* @jsx createElement */
// default : React.createElement

import { createElement, render } from "./react.js";

function Title(props) {
  return (
    <div>
      <h2>This is h2 tag</h2>
      <p>This is p tag</p>
    </div>
  );
}

render(<Title />, document.querySelector("#root"));
