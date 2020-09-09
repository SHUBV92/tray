// Packages
import React, { useState } from "react";
import Button from "../../components/Button/Button.jsx";

import { submitUserDetails } from "../../store/actions.js";

// Components
import Input from "../../components/Input/Input";
import { Container } from "./User.styles";
import { connect } from "react-redux";

const User = (props) => {
  const [userDetails, getUserDetails] = useState({
    name: "",
    role: "",
    email: "",
    password: "",
  });

  console.log("props", props);
  console.log("User", userDetails)

  const handleChange = (event) => {
    const { id, value } = event.target;

    getUserDetails({
      ...userDetails,
      [id]: value,
    });
  };

  const input = [
    {
      type: "text",
      id: "name",
      placeholder: "Name",
      label: "Name",
      required: true,
    },
    {
      type: "text",
      id: "role",
      placeholder: "role",
      label: "Role",
      required: true,
    },
    {
      type: "email",
      id: "email",
      placeholder: "Email",
      label: "Email",
      required: true,
    },
    {
      type: "password",
      id: "password",
      placeholder: "Password",
      label: "Password",
    },
  ];

  return (
    <Container>
      <Input
        input={input}
        onChange={handleChange}
      />

      <Button
        label="Submit"
        submit={() =>
          submitUserDetails(userDetails)
        }
        userDetails={userDetails}
        route="/privacy"
      />
    </Container>
  );
};

const mapStateToProps = (state) => ({
  userDetails: state.userDetails,
});

const mapDispatchToProps = (dispatch) => ({
  submitUserDetails: (userDetails) =>
    dispatch(submitUserDetails(userDetails)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);

// if Name, Email & Password field are empty then do
// not  move to the next page once submit has been clicked
// if( Name && Email && Password === "") { Button }
