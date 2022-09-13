import resolveAttrs from "./resolveAttrs";
import resolveChildren from "./resolveChildren";

function elementGenerator<T = OrbElementAttrs>(tag: string) {
  const func: OrbElement<T> = (children?: OrbNodes, attrs?) => {
    const element = document.createElement(tag);
    resolveAttrs(element, attrs as any);
    resolveChildren(element, children);
    return element;
  };

  return func;
}

export default elementGenerator;
