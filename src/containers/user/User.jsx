// Packages 
import React from "react";
// Components
import Form from "../../components/input/Input";


const User = () => {
  
    const input = [
        {type: "text", placeholder: "Name", required:"required"}, 
        {type: "text", placeholder: "role"},
        {type: "email", placeholder: "Email"},
        {type: "password", placeholder: "Password"}
    ]

    return (
    <div>
       <Form 
       input ={input}
       />
    </div>
  );
};

export default User;
