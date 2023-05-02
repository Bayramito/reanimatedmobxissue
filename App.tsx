import React from "react";
import { initializeStores } from "./stores/Configure.stores";
import { Provider } from "mobx-react";
import MainComponent from "./components/MainComponent";

const App = () => {
  const [stores,setStores] = React.useState([]);
  const [ready,setReady] = React.useState(false);
  React.useEffect(() => {
    const getStores = async () => {
      const store =  await initializeStores()
      setStores(store);
      setReady(true);
    }

getStores().catch(console.warn);
  },[]);
  if (!ready) return null
  return (
    <Provider {...stores}>
  <MainComponent />
    </Provider>
  );
};


export default App;
