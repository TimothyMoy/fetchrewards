import React from 'react';
import Item from './Item';

function ItemList (props) {
  // Checking props to target specific items in object
  // console.log('Item List = ', props);

  // Map out the items object
  let itemList = props.items.map((itemObj) => {
    // filter out item objects with the name of null and blank
    if (itemObj.name !== null && itemObj.name !== "") {
      return(
        <Item
        key={itemObj.id}
        item={itemObj}
        />
        )
      }
    })
    // sort item id first because it's the same as name 
    itemList.sort((a,b) => a.props.item.id - b.props.item.id)
    // sort list id second because there's four specific grouped values
    itemList.sort((a,b) => a.props.item.listId - b.props.item.listId)

    // Error handling incase no items found
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