import React from 'react';
import './ItemListContainer.css';
import { ItemCount } from '../ItemCount/ItemCount';


export const ItemListContainer = (props) => {

    return(
        <React.Fragment>
            <h3 className="center">{props.text}</h3>
            <ItemCount product="Camisa Tiger" stock="5" />
        </React.Fragment>
    )
}