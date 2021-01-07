import React from 'react';
import './ItemListContainer.css';

export const ItemListContainer = (props) => {

    return(
        <React.Fragment>
            <h3 className="center">{props.text}</h3>
        </React.Fragment>
    )
}