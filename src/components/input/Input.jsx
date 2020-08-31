import React, { useState } from "react";
import Button from "../button/Button";
import { Container } from "./input.styles";

const Input = (props) => {
  
  return (
    <Container>
      {props.input.map((input) => (
        <input
          type={input.type}
          placeholder={input.placeholder}
          onChange={input.onChange}
        />
      ))}
      <Button
        label="Submit"
        getUserDetails={props.getUserDetails}
        submitUserDetails={props.submitUserDetails}
      />
    </Container>
  );
};

export default Input;
