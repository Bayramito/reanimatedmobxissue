
export default class Store {
  isReady = false;

  constructor(stores) {
    Object.defineProperty(this, "stores", {value: stores, writable: true});
  }

  get stores() {
    return null;
  }

  async setup() {}
}
