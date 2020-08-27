import React from "react";

const Input = (props) => {
  return (
    <div>
      {props.input.map((input) => (
        <input
          type={input.type}
          placeholder={input.placeholder}
        />
      ))}
    </div>
  );
};

export default Input;
