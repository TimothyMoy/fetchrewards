import React from 'react';
import Item from './Item';

function ItemList (props) {
  console.log('Item List = ', props);

  let itemList = props.items.map((itemObj) => {
    return(
      <Item
        key={itemObj.id}
        item={itemObj}
      />
    )
  }).sort((a,b) => a.props.item.listId - b.props.item.listId)
  
  if (props.items.length === 0) {
    itemList = <p>No Items found</p>
  }

  return (
    <div>
      {itemList}
    </div>
  );
}

export default ItemList;