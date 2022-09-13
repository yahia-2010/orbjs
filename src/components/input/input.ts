import elementGenerator from "../../utils/elementGenerator";

export interface Input extends OrbElementAttrs {
  value?: string;
  placeholder?: string;
}

const input = elementGenerator<Input>("input");

export default input;
