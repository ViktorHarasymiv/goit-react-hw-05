import React, { useState } from "react";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import css from "./Pagination.module.css";

export default function PaginationPage({
  totalPage,
  next,
  setPage,
  currentPage,
}) {
  function CurrentPage(num) {
    setPage(num);
    next(num);
  }

  return (
    <div className="pagination">
      <Stack spacing={2}>
        <Pagination
          count={totalPage}
          page={currentPage}
          onChange={(_, num) => CurrentPage(num)}
          size={"small"}
          variant="outlined"
          color="primary"
        />
      </Stack>
    </div>
  );
}
