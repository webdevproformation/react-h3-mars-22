import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router , Routes, Route} from "react-router-dom";
import { Navbar } from './composants/Navbar';
import {Page1} from "./composants/Page1"
import {Page2} from "./composants/Page2"
import {Page3} from "./composants/Page3"
import {Page4} from "./composants/Page4"
import {Page5} from "./composants/Page5"

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
            <Route path="page/4" element={<Page4 />} />
            <Route path="page/5" element={<Page5 />} />
          </Route>
        </Routes>
      </main>
    </div>
    </Router>
  );
}

export default App;
