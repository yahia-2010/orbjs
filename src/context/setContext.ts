import Context from "./Context";

function setContext<T = any>(context: Context<T>, data: T) {
  context.set(data);
}

export default setContext;
