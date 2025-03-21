import React from "react";
import { NavLink } from "react-router-dom";

import clsx from "clsx";
import css from "./Navigation.module.css";

import { useLocation } from "react-router-dom";

import { SiThemoviedatabase } from "react-icons/si";

export default function AppBar() {
  const location = useLocation();

  const buildLinkClass = (localPath) => {
    return clsx(css.link, location.pathname === localPath && css.active);
  };

  return (
    <header className={css.header}>
      <SiThemoviedatabase style={{ fontSize: "38px" }}></SiThemoviedatabase>
      <nav className={css.nav}>
        <NavLink to="/" className={buildLinkClass("/")}>
          Home
        </NavLink>
        <NavLink to="/movies" className={buildLinkClass("/movies")}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
}
