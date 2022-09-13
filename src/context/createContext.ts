import Context from "./Context";

function createContext<T = any>(data: T) {
  return new Context<T>(data);
}

export default createContext;
