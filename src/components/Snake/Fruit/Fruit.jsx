import React from 'react';
import Fruits from '../../../assets/fruits.svg';

function Fruit({ name }) {
  return (
    <svg width={'100%'} height={'100%'}>
      <use href={`${Fruits}#${name}`}/>
    </svg>
  );
}


Fruit.Scores = {
  'apple': 100,
  'carrot': 100,
  'banana': 100,
  'pear': 100,
  'orange': 250,
  'watermelon': 250,
  'strawberry': 500,
  'grapes': 1000,
};

Fruit.Names = Object.keys(Fruit.Scores);

Fruit.ProbabilityWeights = () => {
  const values = Object.values(Fruit.Scores);
  const sum = values.reduce((acc, curr) => acc + curr);
  return values.map(v => sum / v);
};

Fruit.Memoized = React.memo(({ name }) => <Fruit name={name}/>);

export default Fruit;
