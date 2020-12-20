export class Component {}

function renderRealDOM(vdom) {
  if (vdom === undefined) return;
  if (typeof vdom === "string") {
    return document.createTextNode(vdom);
  }

  const $el = document.createElement(vdom.tagName);

  vdom.children.map(renderRealDOM).forEach((node) => {
    $el.appendChild(node);
  });

  return $el;
}

export function render(vdom, container) {
  container.appendChild(renderRealDOM(vdom));
}

/*
export const render = function () {
  let prevVdom = null;

  return function (nextVdom, container) {
    if (prevVdom === null) {
      prevVdom = nextVdom;
    }
    //diff
    container.appendChild(renderRealDOM(vdom));
  };
};
*/

export function createElement(tagName, props, ...children) {
  if (typeof tagName === "function") {
    if (tagName.prototype instanceof Component) {
      const instance = new tagName({ ...props, children });
      return instance.render();
    } else {
      return tagName.apply(null, [props, ...children]);
    }
  }
  return { tagName, props, children };
}
