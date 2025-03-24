import React, { lazy } from "react";

import css from "./Accost.module.css";
const All = lazy(() => import("../../All/All"));

export default function Accost({
  data,
  totalPage,
  nextPage,
  currentFilter,
  setPage,
  currentPage,
  loading,
}) {
  return (
    <All
      loading={loading}
      data={data}
      totalPage={totalPage}
      nextPage={nextPage}
      setPage={setPage}
      currentPage={currentPage}
    ></All>
  );
}
