import React from 'react';

function Item(props) {
  console.log('Item Props = ', props)

  return (
    <h4>{props.items.id}</h4>
  )
}

export default Item;