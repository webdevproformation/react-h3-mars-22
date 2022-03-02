
import {useSelector} from "react-redux";

function App() {
  const articles = useSelector((state) => { return state.articleReducer})
  console.log(articles);
  return (
    <div className="App">
      <header>
        <h1>Découverte de Redux</h1>
      </header>
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
