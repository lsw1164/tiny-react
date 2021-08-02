/* @jsx TinyReact.createElement */
import TinyReact from "./TinyReact.js";

const element = (
  <div style="background: blue">
    <h1>Hello world</h1>
    <h2 style="color: red">Tiny React</h2>
  </div>
);

const $root = document.getElementById("root");
TinyReact.render(element, $root);
