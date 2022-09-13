import Context from "./Context";

function getContext<T = any>(context: Context<T>) {
  return context.get;
}

export default getContext;
