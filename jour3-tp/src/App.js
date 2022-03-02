import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import { Outlet } from "react-router-dom";
import { Navbar } from "./composants/Navbar";


function App() {
  return (
    
    <div className="container">
      <header>
        <Navbar />
      </header>
      <main className="mt-4 h-100">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
