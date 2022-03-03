

import {useSelector , useDispatch} from "react-redux";
import { MODIF_NOM_USER , modifUserName } from "./actions/user";
import {deleteFirst} from "./actions/article"

function App() {
  const articles = useSelector((state) => { return state.articleReducer})
  const user = useSelector((state) => {return state.userReducer})
  const dispatch = useDispatch()

  /* function modifNomUser(){
    dispatch({type:MODIF_NOM_USER , payload : "Alain"})
  } */

  function modifNomUser(){
    dispatch(modifUserName())
  }
  function supprPremier(){
    dispatch(deleteFirst())
  }

  console.log(user);
  return (
    <div className="App">
      <header>
        <h1>Découverte de Redux</h1>
      </header>
      <button onClick={modifNomUser}>Changer le nom de l'utilisateur</button>
      <pre>
        {JSON.stringify(user , null , " ")}
      </pre>
      <button onClick={supprPremier}>suppr premier article</button>
      <main>
        {articles.length > 0 && <>
          {articles.map((article, index) => {
            return <article key={index}>
                <h2>{article.title}</h2>
                <p>{article.body}</p>
            </article>
          })}
        </>}
      </main>
    </div>
  );
}

export default App;
