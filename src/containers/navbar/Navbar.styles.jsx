import styled from "styled-components";

export const Container = styled.div`
  position: sticky;
  width: 100%;
  /* background-color: lightblue; */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
  padding: 20px;
`;
export const NavLinks = styled.div`
  display: inline;
  padding: 17px;
  padding-left: 50px;
  padding-right: 40px;
  border-style: solid;

  .active {
    pointer-events: none;
    cursor: default;
  }
`;
