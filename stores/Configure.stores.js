import GlobalStore from "./providers/Global";

const stores = {};

export async function initializeStores() {
  stores.global = new GlobalStore(stores);


  for (const name of Object.keys(stores)) {
    if (!stores[name].isReady) {
      stores[name].isReady = true;
      await stores[name].setup();
    }
  }

  return stores;
}

