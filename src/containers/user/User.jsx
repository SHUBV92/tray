// Packages
import React, { useState } from "react";
// Components
import Input from "../../components/input/Input";
import { Container } from "./User.styles";

const User = (props) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userDetails, setUserDetails] = useState(
    {}
  );

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleRole = (event) => {
    setRole(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const getUserDetails = () => {
    setUserDetails({
      name: name,
      role: role,
      email: email,
      password: password,
    });
  };

  console.log("userdetails", userDetails);

  const input = [
    {
      type: "text",
      placeholder: "Name",
      required: "required",
      onChange: handleName,
      label: "Name",
      required: true,
    },
    {
      type: "text",
      placeholder: "role",
      onChange: handleRole,
      label: "Role",
      required: true,
    },
    {
      type: "email",
      placeholder: "Email",
      onChange: handleEmail,
      label: "Email",
      required: true,
    },
    {
      type: "password",
      placeholder: "Password",
      onChange: handlePassword,
      label: "Password",
    },
  ];

  return (
    <Container>
      <Input
        input={input}
        name={name}
        onClicked={getUserDetails}
        submitUserDetails={
          props.submitUserDetails
        }
        route="/privacy"
      />
    </Container>
  );
};

export default User;

// if Name, Email & Password field are empty then do
// not  move to the next page once submit has been clicked
// if( Name && Email && Password === "") { Button }
