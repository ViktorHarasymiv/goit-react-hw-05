import React from "react";

import css from "./All.module.css";
import toast from "react-hot-toast";

import List from "./List/List";
import Pagination from "../Movie/Pagination/Pagination";

export default function All({
  data,
  totalPage,
  nextPage,
  loading,
  setPage,
  currentPage,
}) {
  return (
    <div className={css.all_tile}>
      <List loading={loading} films={data} />
      <Pagination
        totalPage={totalPage}
        next={nextPage}
        setPage={setPage}
        currentPage={currentPage}
      />
    </div>
  );
}
