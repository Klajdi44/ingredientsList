import React, { useEffect, useState } from 'react';
import { Data } from '../modules/useFetch';
import IngredientsListItem from './IngredientsListItem';
import { v4 as uuid } from 'uuid';
import ListHeader from './ListHeader';

type Props = {
  data: Data[];
  setData: React.Dispatch<React.SetStateAction<Data[] | null>>;
};

function IngredientsList(props: Props) {
  const [people, setPeople] = useState(1);
  const { data, setData } = props;
  useEffect(() => {
    const addIdToList = data.map(el => ({ ...el, id: uuid() }));
    setData(addIdToList);
  }, []);

  function handleClick(index: number, ingredient: Data, mathOperator: string) {
    const clonedDataArray = [...data];

    clonedDataArray[index] = {
      ...clonedDataArray[index],
      measure: {
        units: clonedDataArray[index].measure.units.map(unit => ({
          ...unit,
          perPortion: handlePortion(unit.perPortion, mathOperator),
        })),
      },
    };
    setData(clonedDataArray);
  }

  function handlePortion(portionNumber: number | string, mathOperator: string) {
    if (mathOperator === '+') {
      return Number(portionNumber) + 1;
    } else if (mathOperator === '-' && portionNumber != 0) {
      return Number(portionNumber) - 1;
    } else {
      return portionNumber;
    }
  }
  function icrementPortion(index: number, ingredient: Data) {
    handleClick(index, ingredient, '+');
  }
  function decrementPortion(index: number, ingredient: Data) {
    handleClick(index, ingredient, '-');
  }

  return (
    <div>
      <ListHeader 
      people={people}
      setPeople={setPeople}
       />
      <ul>
        {data.map((ingredient, index) => (
          <IngredientsListItem
            ingredient={ingredient}
            setData={setData}
            incrementPortion={() => icrementPortion(index, ingredient)}
            decrementPortion={() => decrementPortion(index, ingredient)}
            people={people}
          />
        ))}
      </ul>
    </div>
  );
}

export default IngredientsList;
