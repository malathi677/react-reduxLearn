
import { Provider } from "react-redux";
import CakeContainer from "./Components/CakeContainer";
import IceCreamContainer from "./Components/IceCreamContainer";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <CakeContainer />
      <IceCreamContainer />
    </Provider>
  );
}

export default App;
