import React from 'react';

function Item(props) {
  console.log('Item Props = ', props)

  if (props.item.listId === 1) {
    return(
      <p>{props.item.listId}</p>
    )
  }
  else {
    return (
      <div className="container">
        <p>everything else</p>
      </div>
    )
  }
}

export default Item;