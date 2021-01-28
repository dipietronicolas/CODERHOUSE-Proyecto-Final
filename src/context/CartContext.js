import React, { useState } from 'react'

export const CartContext = React.createContext();

export const CartDataProvider = ({ children }) => {

  const [data, setData] = useState([]);

  // Agregar Item sin duplicar.
  const addItem = (item, amount) => {

    let foundFlag = false;        // flag para saber si el item ya se encuentra en el cart.
    let dataAux = [...data];      // copio el array de items para poder editarlo.

    for (let i = 0; i < dataAux.length; i++) {
      if (dataAux[i].item.id === item.id) {               // Si el item ya se encuentra en el cart.
        if (dataAux[i].amount + amount >= dataAux[i].item.stock) { // Y el monto a comprar no supera el stock disponible 
          dataAux[i].amount = dataAux[i].item.stock;      // Sumo la cantidad a comprar.
        } else {
          dataAux[i].amount += amount;
        }
        foundFlag = true;              // Mi flag pasa a estado 'encontrado'.
        setData(dataAux);              // Seteo mi nuevo cart.
      }
    }
    if (foundFlag === false) {         // Si el item no se encontro, lo agrego.
      setData([...data, { item, amount }]);
    }
  }

  // Borro un item por id
  const removeItem = (itemId) => {
    let dataAux = [...data];            // copio el array de items para poder editarlo.
    for(let i=0; i<data.length; i++){   // Recorro el original
      if(itemId === data[i].item.id){   // Lo encuentro
        dataAux.splice(i, 1);           // Lo borro en la copia
      }
    }
    setData(dataAux);                   // Setteo la copia como el nuevo array
  }


  // Borrar todos los items
  const clear = () =>{
    setData([]);
  }

  return (
    <CartContext.Provider value={{
      data,
      setData,
      addItem,
      removeItem,
      clear
    }}>
      { children}
    </CartContext.Provider>
  )
}
