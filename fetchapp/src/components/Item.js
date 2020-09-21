import React from 'react';

function Item(props) {
    return(
      <div>
        <p>ListId: {props.item.listId}</p>
        <p>Item Name: {props.item.name}</p>
      </div>
    )
}

export default Item;