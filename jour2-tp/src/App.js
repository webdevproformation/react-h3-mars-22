import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router , Routes, Route} from "react-router-dom";
import { Navbar } from './composants/Navbar';
import {Page1} from "./composants/Page1"
import {Page2} from "./composants/Page2"
import {Page3} from "./composants/Page3"

function App() {
  return (
    <Router>
    <div className="container">
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/">
            <Route index element={<Page1 />} />
            <Route path="page/2" element={<Page2 />} />
            <Route path="page/3" element={<Page3 />} />
          </Route>
        </Routes>
      </main>
    </div>
    </Router>
  );
}

export default App;
