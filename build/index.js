/* @jsx createElement */
// default : React.createElement
import { createElement, render } from "./react.js";

function Title(props) {
  return createElement("div", null, createElement("h2", null, "This is h2 tag"), createElement("p", null, "This is p tag"));
}

render(createElement(Title, null), document.querySelector("#root"));