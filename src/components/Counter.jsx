import { useState } from "react"

// SECTION 1 OBJECT

// function Counter() {
//   const [cart, setCart] = useState({
//     item: "apple",
//     quantity: 0,
//   });

//   function addApple() {
//     setCart(prevCart => ({
//       ...prevCart,
//       quantity: prevCart.quantity + 1,
//     }))
//   }

//   function removeApple() {
//     // 1. Use callback to get the previous value
//     // 2. Spread out all the properties of the prev state.
//     // 3. Only change the property that you need to change
//     setCart(prevCart => ({
//       ...prevCart,
//       quantity: prevCart.quantity - 1,
//     }))
//   }
//   return (
//     <div>
//       <button onClick={addApple}>+</button>
//       {cart.quantity}
//       {cart.item}
//       <button onClick={removeApple}>-</button>
//     </div>
//   )
// }



// SECTION 2 ARRAY

function Counter() {
  // Everytine the "+" and "-" button is clicked.
  // I want to add "+" and subtract "-"
  // in an array

  const [arr, setArr] = useState([])

  function addPlus() {
    setArr(prevArr => [...prevArr, "+"])
  }

  function addMinus() {
    setArr((prevArr) => [...prevArr, "-"])
  }
  
  return (
    <div>
      <button onClick={addPlus}>+</button>
      <button onClick={addMinus}>-</button>
      {arr.toString()}
    </div>
  )
}

export default Counter 