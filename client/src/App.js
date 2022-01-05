import './App.css';
import { useState, useEffect } from 'react'
import ArticleList from './components/ArticleList';
import Form from './components/Forms';



function App() {

  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:8000/comments/api/articles', {
      'method': 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(resp => resp.json())
      .then(resp => setArticles(resp))
      .catch(error => console.log(error))

  }, [])


  const insertedInformation = (article) => {
    const new_articles = [...articles, article]
    setArticles(new_articles)

  }

  return (
    <div className="App">

      <div className='row'>

        <ArticleList articles={articles} />

        <Form insertedInformation={insertedInformation} />
      </div>




    </div>
  );
}

export default App;
