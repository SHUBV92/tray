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
              background: "lightblue",
              padding: "13px",
              paddingLeft: "60px",
              paddingRight: "60px",
              transition: "0.5s",
              textDecoration: "none",
              borderRadius: "10px"

            }}
            style={{
              color: "black",
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
