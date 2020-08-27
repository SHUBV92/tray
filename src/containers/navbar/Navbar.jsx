import React from "react";
import {
  Container,
  NavLinks,
} from "./Navbar.styles.jsx";
import { NavLink } from "react-router-dom";
import { baseRoutes } from "../../constants/routes";

const Navbar = () => {
  return (
    <Container>
      {baseRoutes.map((route) => (
        <NavLinks>
          <NavLink
            to={route.path}
            activeStyle={{
              fontWeight: "bold",
              borderBottom: "4px solid white",
            }}
            style={{
              textDecoration: "none",
              color: "black",
              background: "white"
            }}
          >
            <a href={route.path}>{route.name}</a>
            {/* <a href="/privacy">Privacy</a>
            <a href="/done">Done</a> */}
          </NavLink>
        </NavLinks>
      ))}
    </Container>
  );
};

export default Navbar;
