import React from 'react';

type Props = {
  people: number;
  setPeople: React.Dispatch<React.SetStateAction<number>>;
};
function ListHeader(props: Props) {
  const { people, setPeople } = props;

  function decrementPeople() {
    people !== 1 && setPeople(people - 1);
  }
  function incrementPeople() {
    setPeople(people + 1);
  }
  return (
    <div className='list-header'>
      <article className='list-header-left-col'>
        <h3 onClick={decrementPeople}>
          <i className='fas fa-minus'></i>
        </h3>
        <span>People {people}</span>
        <h3 onClick={incrementPeople}>
          <i className='fas fa-plus'></i>
        </h3>
      </article>
      <article className='list-header-right-col'>
        <span>
          <i className='far fa-clock'></i> 20 min
        </span>
      </article>
    </div>
  );
}

export default ListHeader;
