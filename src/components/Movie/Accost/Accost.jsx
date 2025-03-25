import React from "react";

import All from "../../All/All";

export default function Accost({
  data,
  totalPage,
  nextPage,
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
