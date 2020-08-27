import React from "react";
import { Container, NavLinks } from "./Navbar.styles.jsx";

const Navbar = () => {
  return (
    <Container>
      <NavLinks>
        <h1>User</h1>
        <h1>Privacy</h1>
        <h1>Done</h1>
      </NavLinks>
    </Container>
  );
};

export default Navbar;
