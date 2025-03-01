import React, { useState } from "react";
import Todolist from "./todolist";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function deleteitem(id){
    setItems(previtems=>{
      return previtems.filter((item , index )=>{
        return index !== id;
      }
      );
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem , index)=> <Todolist 
          txt={todoItem}
          key = {index}
          id= {index}
          onchecked = {deleteitem}
          />)}
        </ul>
      </div>
    </div>
  );
}

export default App;
