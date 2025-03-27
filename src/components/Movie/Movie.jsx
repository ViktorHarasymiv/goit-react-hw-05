import React from "react";

import List from "./List/List";

export default function Movie({ loading, films }) {
  return (
    <div>
      <List films={films} loading={loading} />
    </div>
  );
}
