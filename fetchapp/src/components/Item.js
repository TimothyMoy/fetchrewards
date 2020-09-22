import React from 'react';

function Item(props) {
  return(
    <div>
      <p>ListId: {props.item.listId}</p>
      <p>{props.item.name}</p>
    </div>
  )
}

export default Item;