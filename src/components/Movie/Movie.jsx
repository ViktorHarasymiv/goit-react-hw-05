import React from "react";

import List from "./List/List";

import Skeleton from "@mui/material/Skeleton";
import css from "./Movie.module.css";

export default function Movie({ loading, films }) {
  return (
    <div>
      {loading ? (
        <Skeleton
          sx={{ bgcolor: " .900" }}
          variant="rectangular"
          width="100%"
          height="100%"
        />
      ) : (
        <List films={films}></List>
      )}
    </div>
  );
}
