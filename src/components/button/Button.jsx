import React from "react";
import { useHistory } from "react-router-dom";

const Button = (props) => {
  const {
    onClicked,
    submitUserDetails,
    name,
    email,
    role
  } = props;

  const history = useHistory();


  return (
    <div>
      <button
        onClick={() => {
          // {name !== "" && email !== "" && role !== ""
            // ?pp
             history.push(props.route)
            // : console.log(
                // "The Input field is empty"
              // )}
              onClicked()
          // getUserDetails();
          // submitUserDetails();
        }}
      >
        {props.label}
      </button>
    </div>
  );
};
export default Button;
