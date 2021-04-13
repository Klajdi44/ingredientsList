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
          <i className='fas fa-exchange-alt'></i> Classic {ingredient.name}
        </p>
        <p>
          <i className='fas fa-exchange-alt'></i> Spicy {ingredient.name}
        </p>
        <p>
          <i className='fas fa-exchange-alt'></i> BBQ {ingredient.name}
        </p>
      </details>
      <span className='symmary-right-col'>
        <h3 className='minus-sign' onClick={props.decrementPortion}>
          <i className='fas fa-minus'></i>
        </h3>
        <span>
          {Number(unitNum) * people} {unitName}
        </span>
        <h3 className='plus-sign' onClick={props.incrementPortion}>
          <i className='fas fa-plus'></i>
        </h3>
      </span>
    </li>
  );
}

export default IngredientsListItem;
