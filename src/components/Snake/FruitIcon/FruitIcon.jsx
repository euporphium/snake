import React from 'react';
import Fruits from '../../../assets/fruits.svg';

function FruitIcon({ name }) {
  return (
    <svg width={'100%'} height={'100%'}>
      <use href={`${Fruits}#${name}`}/>
    </svg>
  );
}

FruitIcon.Type = {
  APPLE: 'apple',
  ORANGE: 'orange',
  WATERMELON: 'watermelon',
  CARROT: 'carrot',
  PEAR: 'pear',
  GRAPES: 'grapes',
  STRAWBERRY: 'strawberry',
  BANANA: 'banana',
};

export default FruitIcon;