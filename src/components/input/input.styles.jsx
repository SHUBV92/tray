import styled from "styled-components";

export const Container = styled.div`
  padding: 10%;
  padding-left: 20%;
  padding-top: 10%;

  input {
    border-radius: 30px;
    align-items: center;
    padding: 10px;
    padding-left: 10%;
  }

  .required:after {
    content: " *";
    color: red;
  }

  @media only screen and (min-width: 600px) {
  }

  @media only screen and (min-width: 768px) {
  }

  @media only screen and (min-width: 992px) {
  }

  @media only screen and (min-width: 1200px) {
  }
`;
