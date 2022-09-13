import elementGenerator from "../../utils/elementGenerator";

export interface A extends OrbElementAttrs {
  href?: string;
}

const a = elementGenerator<A>("a");

export default a;
