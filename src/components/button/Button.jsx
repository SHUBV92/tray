import React from "react";
import { useHistory } from "react-router-dom";

const Button = (props) => {
  const { submit } = props;

  const history = useHistory();

  return (
    <div>
      <button
        onClick={() => {
          history.push(props.route);
          submit((props)=>props.userDetails)
        }}
      >
        {props.label}
      </button>
    </div>
  );
};
export default Button;
