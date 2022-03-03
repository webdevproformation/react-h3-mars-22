
import { useEffect } from "react";
import {useSelector , useDispatch} from "react-redux";

function App() {
  const articles = useSelector((state) => { return state.articleReducer})
  const user = useSelector((state) => {return state.userReducer})

  console.log(user);
  return (
    <div className="App">
      <header>
        <h1>Découverte de Redux</h1>
      </header>
      <pre>
        {JSON.stringify(user , null , " ")}
      </pre>
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
