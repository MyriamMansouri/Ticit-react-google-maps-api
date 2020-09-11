import React from "react";
import { Icon } from "react-icons-kit";
import { buttonClose } from "react-icons-kit/metrize/buttonClose";
import { happyOutline } from "react-icons-kit/ionicons/happyOutline";
import { androidSad } from "react-icons-kit/ionicons/androidSad";
import { crosshair } from "react-icons-kit/feather/crosshair";
import { userPlus } from "react-icons-kit/feather/userPlus";
import { logIn } from "react-icons-kit/feather/logIn";
import { logOut } from "react-icons-kit/feather/logOut";
import { map } from "react-icons-kit/feather/map";
import {home} from 'react-icons-kit/feather/home'

export const OutlinedClose = () => <Icon icon={buttonClose} size={56} />;

export const Happy = ({ style, size }) => (
  <Icon style={style} icon={happyOutline} size={size ? size : 47} />
);

export const Sad = ({ style }) => (
  <Icon style={style} icon={androidSad} size={47} />
);

export const Crosshair = ({ style, size }) => (
  <Icon style={style} icon={crosshair} size={size ? size : 47} />
);

export const UserPlus = ({ style, size }) => (
  <Icon style={style} icon={userPlus} size={size ? size : 47} />
);

export const LogIn = ({ style, size }) => (
  <Icon style={style} icon={logIn} size={size ? size : 47} />
);

export const LogOutIco = ({ style, size }) => (
  <Icon style={style} icon={logOut} size={size ? size : 47} />
);

export const Map = ({ style, size }) => (
  <Icon style={style} icon={map} size={size ? size : 47} />
);

export const Home = ({ style, size }) => (
  <Icon style={style} icon={home} size={size ? size : 47} />
);
