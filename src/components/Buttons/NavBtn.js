import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../assets/styles";

const NavBtn = ({ icon, text }) => {
  return (
    <Wrapper>
      <IcoSpan>{icon}</IcoSpan>
      <p>{text}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  font-size: 0.84rem;
  color: ${(props) =>
    useLocation().pathname === "/map" ? "white" : COLORS.text};
  width: 70px;
  text-decoration: none;
  > * {
    color: ${(props) =>
      useLocation().pathname === "/map" ? "white" : COLORS.text};
    text-decoration: none;
    width: 100%;
    text-align: center;
  }
`;
const IcoSpan = styled.span`
  margin-bottom: 5px;
`;

export default NavBtn;
