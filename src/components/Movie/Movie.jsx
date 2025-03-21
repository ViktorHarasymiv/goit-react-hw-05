import React from "react";

import css from "./Movie.module.css";
import List from "./List/List";

export default function Movie({ films }) {
  return (
    <div>
      <List films={films}></List>
    </div>
  );
}
