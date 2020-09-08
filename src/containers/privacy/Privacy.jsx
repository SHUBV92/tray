import React from "react";
import { Container } from "./Privacy.styles.jsx";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input.jsx";

const Privacy = () => {
  const input = [
    { type: "checkbox", route: "/done", required: "required" },
  ];
  return (
    <Container>
      <Input input={input} />
      <h3>
        Recieve update about Tray.io product by
        email
      </h3>
      <hr />
      <Input input={input} />
      <h3>
        Recieve communication by email for other
        products created by the Tray.io team
      </h3>
      <hr />
      <Button label="Submit" />
      <Button label="Go Back" route={"/user"} />

    </Container>
  );
};

export default Privacy;
