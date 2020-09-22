import React from 'react';
import Item from './Item';

function ItemList (props) {
  console.log('Item List = ', props);

  let itemList = props.items.map((itemObj) => {
    if (itemObj.name !== null && itemObj.name !== "") {
      return(
        <Item
        key={itemObj.id}
        item={itemObj}
        />
        )
      }
    })
    itemList.sort((a,b) => a.props.item.id - b.props.item.id)
    itemList.sort((a,b) => a.props.item.listId - b.props.item.listId)

    if (props.items.length === 0) {
      itemList = <p>No Items found</p>
    }
    
    return (
      <div className="container">
      {itemList}
    </div>
  ); 
}

export default ItemList;