import React from "react";

const Button = (props) => {
  const {getUserDetails, submitUserDetails} = props
  return (
    <div>
      <button
        onClick={() => {
          {
            return getUserDetails;
          }
          // {
          //   return submitUserDetails;
          // }
        }}
      >
        {props.label}
      </button>
    </div>
  );
};
export default Button;
