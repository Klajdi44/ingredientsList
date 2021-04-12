import React from 'react';

type Props = {
  people: number;
  setPeople: React.Dispatch<React.SetStateAction<number>>;
};
function ListHeader(props: Props) {
  const { people, setPeople } = props;

  function decrementPeople() {
    people !== 0 && setPeople(people - 1);
  }
  function incrementPeople() {
    setPeople(people + 1);
  }
  return (
    <div>
      <article className='list-header-left-col'>
        <span onClick={decrementPeople}>-</span>
        <span>{people}</span>
        <span onClick={incrementPeople}>+</span>
      </article>
      <article className='list-header-right-col'>
        <span>20 min</span>
      </article>
    </div>
  );
}

export default ListHeader;
