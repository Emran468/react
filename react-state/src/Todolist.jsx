
// import React from 'react'
import {useState} from 'react';

const Todolist = () => {
  const [items, setItems]= useState([]);
 const[inputValue, setInputValue]= useState('');
  const addItem = () => {
    if(inputValue.trim() !== ""){
    setItems([...items, inputValue]);
    setInputValue('');
    }
  }

  const removeItem=(index) => {
   const updateItem= items.filter((_, i) => i !== index)
    setItems(updateItem)
  }


  return (
    <div>
        <h1>Todolist</h1>
        <input type="text" placeholder='add your item' value={inputValue}
        onChange={(e)=>setInputValue(e.target.value) }
        />
        <button onClick={addItem}>Add</button>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={()=>removeItem(index)}>Remove</button>
            </li>
          ))}
          </ul>
    
    </div>
  )
}

export default Todolist