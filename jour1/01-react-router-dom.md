## lien hypertexte

en html => <a href=""></a>

avec la librairie react-router-dom => <Link to=""></Link>

import { Link } from "react-router-dom" ;

## le composant Link doit être mis dans <BrowserRouter> ou un composant Parent

src/index.js => ****
src/App.js

import { BrowserRouter as Router } from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>  
  </React.StrictMode>,
  document.getElementById('root')
);

## router version 6 react router dom à mettre dans App.js

<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/contact" element={<Contact />} />
</Routes>

## router version 5 react router dom

<Switch>
    <Route path="/" exact component={Home} />
    <Route path="/contact" component={Contact} />
</Switch>