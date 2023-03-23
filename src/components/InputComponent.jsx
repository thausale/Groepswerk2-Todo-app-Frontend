import React from "react";

const InputComponent = (props) => {
  const { value, setValue } = props;
  console.log(props);
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
};

export default InputComponent;
