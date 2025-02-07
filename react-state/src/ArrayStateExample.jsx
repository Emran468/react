
import  { useState } from "react";
const ArrayStateExample = () => {
    const [items, setItems] = useState(["Apple", "Banana", "Cherry"]);
    const addItem = () => {
      setItems([...items, "Date"]);
     
    };
    const removeItem = () => {
      setItems(items.slice(0, -1));
    }

  return (
    <div>
      <h1>ArrayStateExample</h1>
          <ul>

            {items.map((item, index) => (
              <li key={index}>{item}</li>

            ))}
          </ul>
          <button onClick={addItem}>addItem</button>
          <button onClick={removeItem}>REMOVEiTEM</button>
    </div>
    


  )
}

export default ArrayStateExample