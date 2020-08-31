// Packages
import React, { useState } from "react";
// Components
import Input from "../../components/input/Input";

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
    console.log("name", name);
  };

  const handleRole = (event) => {
    setRole(event.target.value);
    console.log("role", role);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
    console.log("email", email);
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
    })
    

    console.log("userDetails", userDetails);
  };


  console.log("userDetails", userDetails);

  // console.log("UserDetails", userDetails);

  const input = [
    {
      type: "text",
      placeholder: "Name",
      required: "required",
      onChange: handleName,
    },
    {
      type: "text",
      placeholder: "role",
      onChange: handleRole,
    },
    {
      type: "email",
      placeholder: "Email",
      onChange: handleEmail,
    },
    {
      type: "password",
      placeholder: "Password",
      onChange: handlePassword,
    },
  ];

  return (
    <div>
      <Input
        input={input}
        getUserDetails={getUserDetails}
        submitUserDetails={props.submitUserDetails}
      />
    </div>
  );
};

export default User;
