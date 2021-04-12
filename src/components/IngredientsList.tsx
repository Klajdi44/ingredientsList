import React, { useEffect } from 'react';
import { Data } from '../modules/useFetch';
import IngredientsListItem from './IngredientsListItem';
import { v4 as uuid } from 'uuid';

type Props = {
  data: Data[];
  setData: React.Dispatch<React.SetStateAction<Data[] | null>>;
};

function IngredientsList(props: Props) {
  useEffect(() => {
    const addIdToList = props.data.map(el => ({ ...el, id: uuid() }));
    props.setData(addIdToList);
  }, []);
  return (
    <ul>
      {props.data.map(ingredient => (
        <IngredientsListItem ingredient={ingredient} setData={props.setData} />
      ))}
    </ul>
  );
}

export default IngredientsList;
