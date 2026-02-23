import React from "react"

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