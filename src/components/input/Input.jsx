import React, { useState } from "react";
import { Container } from "./input.styles";

const Input = (props) => {
  const handleSubmit = (event) => {
    alert("A name was submitted: ");
    event.preventDefault();
  };

  return (
    <Container>
      {props.input.map((input) => (
        <div>
          <br />
          <form onSubmit={handleSubmit}>
            <label>{input.label}</label>
            <br />
            <input
              type={input.type}
              id={input.id}
              placeholder={input.placeholder}
              onChange={props.onChange}
              required={input.required}
            />
          </form>
        </div>
      ))}
      <br />
    </Container>
  );
};

export default Input;
