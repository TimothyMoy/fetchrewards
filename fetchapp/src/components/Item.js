import React from 'react';

function Item(props) {
  console.log('Item Props = ', props)

  return (
    <h4>{props.item.id}</h4>
  )
}

export default Item;