import React from "react";
import { Container } from "./Done.styles.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/button/Button.jsx";

const Done = (props) => {
  return (
    <Container>
      <Button
        label="Go Back"
        route={"/privacy"}
      />
      <FontAwesomeIcon icon={faCheckCircle} />
      <h3>
        Please Verify your email address, you
        should have recieved an email from us
        already!
      </h3>
      {console.log(props.userDetails)}
    </Container>
  );
};

export default Done;
