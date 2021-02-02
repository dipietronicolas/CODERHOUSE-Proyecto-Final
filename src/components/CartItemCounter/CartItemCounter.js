import React, { useState, useEffect, useContext } from 'react';
import './CartItemCounter.css';
import { CartContext } from '../../context/CartContext';

export const CartItemCounter = ({ stock, dataIndex }) => {

  const [ counter, setCounter ] = useState();
  const { data, setData } = useContext(CartContext);
  
  const handlePlusB = () => {
    counter < data[dataIndex].item.stock && setCounter(counter + 1);
  }

  const handleMinusB = () => {
    counter > 1 && setCounter(counter - 1);
  }

  useEffect(() => {
    setCounter(data[dataIndex].amount)
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    const dataAux = [...data];
    dataAux[dataIndex].amount = counter;
    setData(dataAux);
    // eslint-disable-next-line
  }, [counter])
  
  return (
    <div className="cart-item-counter">
      cantidad:
      <div className="cart-counter-input-container">
        <button
          onClick={handleMinusB}
          className="cart-counter-button-minus"
          tabIndex='-1'>
          -
        </button>
        <input
          value={counter}
          onChange={() => null}
          type="number"
          className="cart-counter-item-counter"
        />
        <button
          onClick={handlePlusB}
          className="cart-counter-button-plus"
          tabIndex='-1'>
          +
        </button>
      </div>
    </div>

  )
}
