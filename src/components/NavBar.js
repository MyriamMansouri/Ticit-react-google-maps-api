import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { checkIfLoggedIn } from "../reducers/user-reducer";
import LogOut from "./LogOut";
import styled from "styled-components";
import { COLORS } from "./assets/styles";
import NavBtn from "./Buttons/NavBtn";
import { UserPlus, LogIn, Home, Map, LogOutIco, Crosshair } from "./Icons";
import CenterToUserMapBtn from "./Buttons/CenterToUserMapBtn";

const NavBar = () => {
  const location = useLocation();
  const isLoggedin = useSelector(checkIfLoggedIn);
  const [open, setOpen] = React.useState(false);

  const textColor = () => {
    return location.pathname === "/map" ? "white" : COLORS.text;
  };

  return (
    <>
      <Nav>
        {!isLoggedin && (
          <>
            <StyledNavLink
              exact
              to="/"
              onClick={() => setOpen(!open)}
              activeClassName="selected"
            >
              <NavBtn
                text="Home"
                icon={<Home size={30} style={{ color: textColor() }} />}
              />
            </StyledNavLink>

            <StyledNavLink
              to="/signup"
              onClick={() => setOpen(!open)}
              activeClassName="selected"
            >
              <NavBtn
                text="Sign up"
                icon={<UserPlus size={30} style={{ color: textColor() }} />}
              />
            </StyledNavLink>

            <StyledNavLink
              to="/login"
              onClick={() => setOpen(!open)}
              activeClassName="selected"
            >
              <NavBtn
                text="Log in"
                icon={<LogIn size={30} style={{ color: textColor() }} />}
              />
            </StyledNavLink>
          </>
        )}

        {isLoggedin && (
          <>
            <StyledNavLink
              to={"/map"}
              onClick={() => setOpen(!open)}
              activeClassName="selected"
            >
              <NavBtn
                text="Map"
                icon={<Map size={30} style={{ color: textColor() }} />}
              />
            </StyledNavLink>

            <LogOut setOpen={setOpen}>
              <NavBtn
                text="Log out"
                icon={<LogOutIco size={30} style={{ color: textColor() }} />}
              />
            </LogOut>
            <CenterToUserMapBtn>
              <NavBtn
                text="My position"
                icon={<Crosshair size={30} style={{ color: textColor() }} />}
              />
            </CenterToUserMapBtn>
          </>
        )}
      </Nav>
    </>
  );
};

const Nav = styled.nav`
  background-color: ${(props) =>
    useLocation().pathname === "/map" ? COLORS.text : COLORS.lightText};
  position: absolute;
  bottom: 0;
  z-index: 10;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  height: 70px;
`;

const StyledNavLink = styled(NavLink)`
  &.selected {
    display: none;
  }
`;

export default NavBar;
