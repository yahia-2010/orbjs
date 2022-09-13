import flyd from "flyd";

const react = (state: State<any>): Text => {
  let element = document.createTextNode(`${state()}`);
  flyd.combine(() => {
    element.textContent = `${state()}`;
  }, [state]);
  return element;
};

export default react;
