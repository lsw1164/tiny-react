const TinyReact = {
  createElement,
  render,
};

const TEXT_ELEMENT = "TEXT_ELEMENT";

function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) =>
        typeof child === "object" ? child : createTextElement(child)
      ),
    },
  };
}

function createTextElement(text) {
  return {
    type: TEXT_ELEMENT,
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

function isProperty(key) {
  return key !== "children";
}

function render(element, container) {
  const dom =
    element.type === TEXT_ELEMENT
      ? document.createTextNode("")
      : document.createElement(element.type);

  Object.keys(element.props)
    .filter(isProperty)
    .forEach((propName) => (dom[propName] = element.props[propName]));

  element.props.children.forEach((child) => render(child, dom));
  container.appendChild(container);
}

export default TinyReact;
