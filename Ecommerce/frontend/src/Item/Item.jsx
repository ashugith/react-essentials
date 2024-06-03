import React from 'react';
import './Item.css';

const Item = (props) => {
  return (
    <div className='item'>
        <div>{props.name}</div>
        <div>{props.old_price}</div>
        <img src={props.image}></img>
    </div>
  )
}

export default Item;
