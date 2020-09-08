import React, { useState } from "react";
import Button from "../button/Button";
import { Container } from "./input.styles";

const Input = (props) => {
  
  const handleSubmit = (event) => {
    alert('A name was submitted: ');
    event.preventDefault();
  }
  
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
              placeholder={input.placeholder}
              onChange={input.onChange}
              required={input.required}
            />
          </form>
        </div>
      ))}
      <br />

      <Button
        label="Submit"
        onClicked={props.onClicked}
        submitUserDetails={
          props.submitUserDetails
        }
        name={props.name}
        email={props.email}
        role={props.role}
        route={props.route}
      />
    </Container>
  );
};

export default Input;
