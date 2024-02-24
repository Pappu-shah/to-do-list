import React, { useState } from "react";

function TextArea(props) {
  const [text, setText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setText(newValue);
  }

  return (
    <div className="form">
      <input onChange={handleChange} value={text} type="text" />
      <button
        onClick={() => {
          props.onClicked(text);
          setText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default TextArea;
