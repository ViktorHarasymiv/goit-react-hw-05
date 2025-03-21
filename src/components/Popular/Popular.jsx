import React, { useState } from "react";
import List from "./List/List";

import css from "./Popular.module.css";

export default function Popular({ data, loader }) {
  const [time, setTime] = useState({
    time: new Date().toLocaleTimeString(),
    date: new Date().toLocaleDateString(),
  });
  return (
    <section className={css.movie_section}>
      <div className="container">
        <div className={css.animated_title}>
          <h1 className={css.affiche_first}>Affiche</h1>
          <h1 className={css.affiche_second}>Affiche</h1>
        </div>
        <h2 className={css.section_title}>
          <span className={css.title_affiche}>Popular today - </span>
          <span className={css.date_affiche}>{time.date}</span>
        </h2>
      </div>
      <List data={data} />
    </section>
  );
}
