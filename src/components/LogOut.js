import React from "react";
import { useDispatch } from "react-redux";
import { resetUser } from "../actions";

import UnstyledButton from "./Buttons/UnstyledButton";

const LogOut = ({ setOpen, children }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    fetch("/api/users/logout")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          dispatch(resetUser());
          setOpen(false);
          window.location.href=("/") // i use that instead of history.push() cause I need to reload the page
        }
      })
      .catch((err) => console.log(err));
  };
  return <UnstyledButton onClick={handleClick}>{children}</UnstyledButton>;
};

export default LogOut;
