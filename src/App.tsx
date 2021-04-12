import React, { useEffect, useState } from 'react';
import './App.css';
import useFetch from './modules/useFetch';
import IngredientsList from './components/IngredientsList';

function App() {
  const [count, setCount] = useState(0);
  const { data, error, loadingState, setData } = useFetch(
    'https://raw.githubusercontent.com/Klajdi44/ingredients/master/db.json'
  );

  return (
    <section className='App'>
      <article className='ingredients-list'>
        {data && <IngredientsList data={data} setData={setData} />}
      </article>
    </section>
  );
}

export default App;
