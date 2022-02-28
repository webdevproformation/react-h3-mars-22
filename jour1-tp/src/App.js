import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Routes , Route} from "react-router-dom"
import { Navbar } from './composants/Navbar';
import { Home } from "./composants/page/Home"
import { Contact } from "./composants/page/Contact"

function App() {
  return (
    <div className="container">
      <header>
        <Navbar />
      </header>
      <main>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
      </main>
    </div>
  );
}

export default App;
