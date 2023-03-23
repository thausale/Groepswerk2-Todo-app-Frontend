import React, { useState } from "react";

const Form = ({ placeholder, setPostValue }) => {
  const [input, setInput] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (input.length > 0) {
          setPostValue(input);
        }
        setInput("");
      }}
    >
      <input
        className="input is-medium"
        type="text"
        placeholder={placeholder}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="button">Add</button>
    </form>
  );
};

export default Form;
