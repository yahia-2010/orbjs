import flyd from "flyd";

const effect = (
  cb: (...values: any[]) => (() => void) | void,
  values: State<any>[]
) => {
  let args = [];

  flyd.combine((...combine) => {
    args = combine.filter((_, index) => index !== combine.length - 2);

    if (cb(...args) instanceof Object) {
      (cb(...args) as any)();
    } else {
      cb(...args);
    }
  }, values as any);
};

export default effect;
