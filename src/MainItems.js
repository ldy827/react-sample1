import React from 'react';


function MainItems({itemImage, itemTitle, itemDescription, itemPrice}) {
    return (
        <div>
            <h3>{itemTitle}</h3>
            <img src={itemImage} width="80%"/>
            <p>{itemDescription}</p>
            <p>{itemPrice}</p>
        </div>
    );
}

export default MainItems;