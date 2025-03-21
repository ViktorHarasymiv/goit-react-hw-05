import React, { lazy } from "react";

import css from "./Accost.module.css";
const All = lazy(() => import("../../All/All"));

export default function Accost() {
  return (
    <div className={css.accost_tile}>
      Welcome to our service
      <span className={css.accost_title}>The Movie DB</span>
      <p className={css.accost_paragraph}>
        We have for you collection with best movies{" "}
      </p>
      <All></All>
    </div>
  );
}
