import React from "react";
import { Container, NavLinks } from "./Navbar.styles.jsx";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <Container>
      <NavLinks>
          <NavLink
          >
        <a href="/user">User</a>
        <a href="/privacy">Privacy</a>
        <a href="/done">Done</a>
        </NavLink>
      </NavLinks>
    </Container>
  );
};

export default Navbar;
