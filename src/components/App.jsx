import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import TextArea from "./TextArea";

function App() {
  const [items, setItems] = useState([]);

  function handleClick(text) {
    if (text !== "") {
      setItems((preValue) => [...preValue, text]);
    }
  }

  function deleteItem(id) {
    setItems((preValue) => {
      return preValue.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <TextArea onClicked={handleClick} />
      <div>
        <ul>
          {items.map((item, index) => (
            <ToDoItem
              onChecked={deleteItem}
              key={index}
              id={index}
              item={item}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
