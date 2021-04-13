import React, { useEffect, useState } from 'react';
import './App.css';
import useFetch from './modules/useFetch';
import IngredientsList from './components/IngredientsList';

function App() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkmode] = useState(false);
  const { data, error, loadingState, setData } = useFetch(
    'https://raw.githubusercontent.com/Klajdi44/ingredients/master/db.json'
  );
  function handleClick() {
    setDarkmode(!darkMode);
    console.log(darkMode);
  }
  return (
    <section className={darkMode ? 'App dark' : 'App'}>
      <h1>PASTA IN TOMATO SAUCE WITH HAM AND TEMPEH</h1>
      <button className='darkmode-btn' onClick={handleClick}>
        {darkMode ? (
          <i className='fas fa-sun'></i>
        ) : (
          <i className='fas fa-moon'></i>
        )}
      </button>
      <article className='ingredients-list'>
        {data && <IngredientsList data={data} setData={setData} />}
      </article>
    </section>
  );
}

export default App;
