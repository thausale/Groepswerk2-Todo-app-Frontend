import React from "react";

const InputComponent = (props) => {
  const { value, setValue, label } = props;
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </>
  );
};

export default InputComponent;
