import { Outlet } from "react-router-dom";
import { Navbar } from "./composants/Navbar";
import "./index.css"
import { Provider } from "react-redux"
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
    <div className="container">
      <header className="App-header">
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
    </Provider>
  );
}

export default App;
