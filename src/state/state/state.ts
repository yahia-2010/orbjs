import flyd from "flyd";

export default function state<T>(value: T): State<T> {
  return flyd.stream(value);
}
