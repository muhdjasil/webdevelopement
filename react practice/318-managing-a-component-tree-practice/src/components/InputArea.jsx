import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input onChange={props.change} type="text" value={props.txt} />
      <button onClick={props.click}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
