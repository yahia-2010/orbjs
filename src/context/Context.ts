export default class Context<T = any> {
  data: any;

  constructor(data: any) {
    this.data = data;
  }

  get get() {
    return this.data;
  }

  set set(data: any) {
    this.data = data;
  }
}
