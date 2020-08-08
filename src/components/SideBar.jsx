import React from "react";

import { Nav } from "react-bootstrap";

import { useRouteMatch, NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseUser,
  faUser,
  faUsers,
  faBars,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

//SideBar Styles
const sideBarStyle = {
  width: "20vw",
  height: "100vh",
  position: "absolute",
  left: "0px",
  top: "0px",
  backgroundColor: "#49475B",
  color: "#ffffff",
};

const sideContentStyle = {
  width: "calc(100vw - 20vw)",
  marginLeft: "auto",
};

const sideBarTitleStyle = {
  padding: "0.4rem 1.5rem 0.4rem 1.5rem",
  backgroundColor: "#799496",
  marginBottom: "0.5rem",
};

const navItemStyle = {
  display: "block",
  padding: "0.7rem 1.5rem 0.7rem 1.5rem",
  textDecoration: "none",
  fontSize: "1.2rem",
  color: "#ffffff",
};

const NavItem = ({ page, children, fontIcon = faHouseUser }) => {
  return (
    <NavLink style={navItemStyle} to={page} activeClassName="nav-active">
      <FontAwesomeIcon icon={fontIcon} />
      <span style={{ marginLeft: "10px" }}>{children}</span>
    </NavLink>
  );
};

export const SideBar = () => {
  return (
    <div style={sideBarStyle}>
      <div style={sideBarTitleStyle}>
        <h2>CiTRA IIUM</h2>
      </div>
      <NavItem page="/home">Home</NavItem>
      <NavItem page="/home/application" fontIcon={faUsers}>
        Applications
      </NavItem>
    </div>
  );
};

export const SideContent = ({ children }) => {
  return <div style={sideContentStyle}>{children}</div>;
};
