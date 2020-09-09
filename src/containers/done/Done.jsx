import React from "react";
import { Container } from "./Done.styles.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/Button/Button.jsx";
import { connect } from "react-redux";

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
      {console.log(props)}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  userDetails: state.userDetails,
});

export default connect(
  mapStateToProps,
  null
)(Done);
