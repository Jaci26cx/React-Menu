
import MenuApp from "./components/MenuApp"

function App () {
  let items = [
 {
      menuName: "Dinner",
      menuItems: [
        {
          itemId: 10,
          itemPrice: "12",
          itemName: "Lasagne",
          itemDescription:
            "Meat and cheese layered between house-made pasta with bell peppers and onions.",
        },
        {
          itemId: 20,
          itemPrice: "10",
          itemName: "Cheese Ravioli",
          itemDescription: "Cheese-filled ravioli served with house red sauce.",
        },
     ],
    },
  ]
  return (
    <div className="App">
    <MenuApp /> 
    <MenuApp menuItems items={items} />
    </div>
  )
}

export default App
