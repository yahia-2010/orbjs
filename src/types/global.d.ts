import flyd from "flyd";

declare global {
  type State<T> = flyd.Stream<T>;

  type OrbNode = Node | string | number | boolean;

  type OrbNodes = OrbNode | OrbNode[];

  type OrbComponent<T = any> = (children?: OrbNodes, props: T) => HTMLElement;

  type OrbElement<T = OrbElementAttrs> = (
    children?: OrbNodes,
    props?: T
  ) => HTMLElement;
}
