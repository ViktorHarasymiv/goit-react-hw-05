import React from "react";

import css from "./Cast.module.css";

export default function CastItem({ dataCast }) {
  const urlImg = `https://image.tmdb.org/t/p/w500/${dataCast.profile_path}`;
  return (
    <div className={css.cast_tile}>
      <img
        className={css.cast_avatar}
        src={urlImg}
        alt={dataCast.name}
        width="200"
        height="300"
      />
      <div className={css.cast_about_tile}>
        <span className={css.cast_name}>{dataCast.name}</span>
        <div className={css.cast_role}>
          <span>Character:</span> {dataCast.character}
        </div>
      </div>
    </div>
  );
}
