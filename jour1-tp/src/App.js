import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Routes , Route} from "react-router-dom"
import { Navbar } from './composants/Navbar';
import { Home } from "./composants/page/Home"
import { Contact } from "./composants/page/Contact"
import { Articles } from './composants/page/Articles';
import { Article } from './composants/page/Article';
import { Profil } from './composants/page/Profil';
import { NotFound } from './composants/page/NotFound';

function App() {
  return (
    <div className="container">
      <header>
        <Navbar />
      </header>
      <main>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact/">
            <Route index element={<Contact />} />
            <Route path=":id" element={<Profil />} />
            
          </Route>

          {/*  <Route path="/articles" element={<Articles />} />
           /route/:id/:titre/:annee 
          <Route path="/articles/:id" element={<Article />} /> */}
          {/* composant Route imbriquée nouvelle syntaxe v6 */}
          <Route path="/articles/">
            <Route index element={<Articles />} />{/*  /articles/ */}
            <Route path=":id" element={<Article />} />{/*  /articles/:id */}
          </Route>

          <Route path="*" element={<NotFound />} />
      </Routes>
      </main>
    </div>
  );
}

export default App;
