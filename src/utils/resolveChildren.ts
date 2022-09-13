const resolveChildren = (element: HTMLElement, children?: OrbNodes) => {
  if (children) {
    if (children instanceof Array) {
      if (children.length > 0) {
        children.forEach((child) => {
          if (child) {
            if (child instanceof Node) {
              element.appendChild(child);
            } else {
              const text = document.createTextNode(`${child}`);
              element.appendChild(text);
            }
          }
        });
      }
    } else {
      if (children) {
        if (children instanceof Node) {
          element.appendChild(children);
        } else {
          const text = document.createTextNode(`${children}`);
          element.appendChild(text);
        }
      }
    }
  }
};

export default resolveChildren;
