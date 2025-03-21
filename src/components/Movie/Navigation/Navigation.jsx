import React from "react";

import css from "./Navigation.module.css";

import { CiFilter } from "react-icons/ci";

export default function Navigation({ result }) {
  return (
    <div className={css.navigation_tile}>
      <div>
        <div className={css.animated_title}>
          <h1 className={css.affiche_first}>Search</h1>
          <h1 className={css.affiche_second}>Search</h1>
        </div>
        {result > 0 && (
          <div className={css.section_title}>
            <span style={{ display: "block", paddingTop: "5px" }}>
              Total: {result}
            </span>
          </div>
        )}
      </div>
      <div className={css.filter_tile}>
        <CiFilter className={css.filter_ico} />
        Filters
      </div>
    </div>
  );
}
