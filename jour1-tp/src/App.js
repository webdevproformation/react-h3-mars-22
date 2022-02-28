import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from './composants/Navbar';

function App() {
  return (
    <div className="container">
      <header>
        <Navbar />
      </header>
    </div>
  );
}

export default App;
