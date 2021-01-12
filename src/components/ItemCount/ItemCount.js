import React, { useState, useEffect } from 'react';
import './ItemCount.css';

export const ItemCount = (props) => {
  const [counter, setCounter] = useState(0);
  
  const handlePlusButton = () => {
    counter < props.stock && setCounter(counter + 1);
  };

  const handleMinusButton = () => {
    counter > 0 && setCounter(counter - 1);
  };
  useEffect(() => {
    setCounter(props.initial);
  }, [props.initial]);

  return (
    <div className="card">
      <div className="card-title">
        <p>{props.product}</p>
        <p>stock: {props.stock}</p>
      </div>
      <div className="input-container">
        <button
          className="button-minus"
          onClick={handleMinusButton}
          tabIndex='-1'>
          -
        </button>
        <input
          value={counter}
          onChange={()=> null}
          type="number"
          className="item-counter"
        />
        <button
          className="button-plus"
          onClick={handlePlusButton}
          tabIndex='-1'>
          +
        </button>
      </div>
      {
        props.stock > 0
          ? <button
            className="button-cart">Agregar al carrito</button>
          : <button
            className="button-cart-no-stock">Sin stock!</button>
      }
    </div>
  );
}