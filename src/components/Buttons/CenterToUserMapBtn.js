import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import UnstyledButton from "./UnstyledButton";
import { setCenter } from "../../actions";
import { Crosshair } from "../Icons";
import { useHistory } from "react-router-dom";
import { getUserPosition } from "../../reducers/map-reducer";

const CenterToUserMapBtn = ({children}) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const userPosition = useSelector(getUserPosition);

  return (
    <UnstyledButton
      onClick={() => {
        dispatch(setCenter({...userPosition}));
        history.push("/map");
      }}
    >
      {children}
    </UnstyledButton>
  );
};

export default CenterToUserMapBtn;

