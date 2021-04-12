import React from 'react';
import { Data } from '../modules/useFetch';

type Props = {
  ingredient: Data;
  setData: React.Dispatch<React.SetStateAction<Data[] | null>>;
  incrementPortion: () => void;
  decrementPortion: () => void;
  people: number;
};

function IngredientsListItem(props: Props) {
  const { ingredient, people } = props;
  const iconUrl = ingredient.icon.url;
  // console.log(ingredient);
  const unitNum = ingredient.measure.units[0].perPortion;
  const unitName = ingredient.measure.units[0].name;

  return (
    <li key={props.ingredient.id}>
      <details>
        <summary>
          <span className='summary-left-col'>
            <img className='ingredient-icon' src={iconUrl} alt='ingredient' />
            <span>{ingredient.name}</span>
          </span>
        </summary>
        <p>
          Epcot is a theme park at Walt Disney World Resort featuring exciting
          attractions, international pavilions, award-winning fireworks and
          seasonal special events.
        </p>
      </details>
      <span className='symmary-right-col'>
        <h3 onClick={props.decrementPortion}>-</h3> {Number(unitNum) * people}
        {unitName}
        <h3 onClick={props.incrementPortion}>+</h3>
      </span>
    </li>
  );
}

export default IngredientsListItem;
