import "./App.css";
import { Provider } from "react-redux";

import store from "./components/redux/cake/store";
import HookCakeContainer from "./components/HookCakeContainer";
import HookIcecreamContainer from "./components/HookIcecreamContainer";
import PayloadCakeContainer from "./components/PayloadCakeContainer";
import CakeContainer from "./components/CakeContainer";
import ItemsContainer from "./components/ItemsContainer";
import UserContainer from "./components/redux/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ItemsContainer cake />
        <CakeContainer />
        <HookCakeContainer />
        <HookIcecreamContainer />
        <PayloadCakeContainer />
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
