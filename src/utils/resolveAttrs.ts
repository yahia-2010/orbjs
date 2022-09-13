const resolveAttrs = (element: HTMLElement, attrs?: OrbElementAttrs) => {
  if (attrs) {
    Object.keys(attrs).forEach((attr) => {
      if (attr === "style") {
        Object.keys((attrs as any)[attr]).forEach((style) => {
          (element.style as any)[style] = (attrs as any)[attr][style];
        });
      } else {
        if (attr.slice(0, 2) === "on") {
          (element as any)[attr] = (attrs as any)[attr];
        } else {
          element.setAttribute(attr, (attrs as any)[attr]);
        }
      }
    });
  }
};

export default resolveAttrs;
