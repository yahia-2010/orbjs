const resolveChildren = (element: HTMLElement, children?: OrbNodes) => {
  if (children) {
    if (children instanceof Array) {
      if (children.length > 0) {
        children.forEach((child) => {
          if (typeof child === "string") {
            const text = document.createTextNode(child);
            element.appendChild(text);
          } else if (child instanceof Node) {
            element.appendChild(child);
          } else {
            throw new Error("child should be of type `OrbNodes`");
          }
        });
      }
    } else {
      if (typeof children === "string") {
        const text = document.createTextNode(children);
        element.appendChild(text);
      } else if (children instanceof Node) {
        element.appendChild(children);
      } else {
        throw new Error("child should be of type `OrbNodes`");
      }
    }
  }
};

export default resolveChildren;
