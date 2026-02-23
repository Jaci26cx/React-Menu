
import Menu from "../Menu"
const MenuApp = () => {
  return (
    <div className="App">
      <Menu
        menuName="Dinner"
        menuItems={[
          {
            itemId: 1,
            itemPrice: "12",
            itemName: "Lasagne",
            itemDescription:
              "Meat and cheese layered between house-made pasta with bell peppers and onions.",
          },
        ]}
      ></Menu>
    </div>
  )
}
export default MenuApp