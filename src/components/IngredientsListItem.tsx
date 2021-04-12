import React from 'react';
import { Data } from '../modules/useFetch';

type Props = {
  ingredient: Data;
  setData: React.Dispatch<React.SetStateAction<Data[] | null>>;
};

function IngredientsListItem(props: Props) {
  const { ingredient } = props;
  const iconUrl = ingredient.icon.url;
  console.log(ingredient);

  return (
    <li key={props.ingredient.id}>
      <details>
        <summary>
          <span>
            <img className='ingredient-icon' src={iconUrl} alt='ingredient' />
            {ingredient.name}
          </span>
					<span>
						
					</span>
        </summary>
        <p>
          Epcot is a theme park at Walt Disney World Resort featuring exciting
          attractions, international pavilions, award-winning fireworks and
          seasonal special events.
        </p>
      </details>
    </li>
  );
}

export default IngredientsListItem;
