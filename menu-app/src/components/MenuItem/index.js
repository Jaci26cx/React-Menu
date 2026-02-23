import React from "react"

//mapping the array here to try to get one item to display as jsx, is not working I got lost here I won't lie

const MenuItem = ({items}) => {
return(
       <div>
        {items.map((item) => (
           <div key={item.itemId}>
          <h1>{item.itemName}</h1>
          <p>{item.itemDescription}</p>
          <p>${item.itemPrice}</p>
        </div>
      ))}
    </div>
);
}

export default MenuItem;