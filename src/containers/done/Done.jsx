import React from "react";
import { Container } from "./Done.styles.jsx";

const Done = (props) => {
  return (
    <Container>
      <h3>
        Please Verify your email address, you
        should have recieved an email from us
        already!
      </h3>
      {/* Pull Data from Redux Store */}
      {console.log(props.userDetails)}
    </Container>
  );
};

export default Done;
