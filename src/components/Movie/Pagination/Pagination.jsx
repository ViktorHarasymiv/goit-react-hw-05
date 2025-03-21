import React, { useState } from "react";

import css from "./Pagination.module.css";

export default function Pagination({ totalPage, next }) {
  const listItems = [];

  for (let i = 1; i < totalPage; i++) {
    listItems.push(i);
  }

  function CurrentPage(index) {
    next(index);
    console.log(index);
  }

  return (
    <ul className={css.buttons_list}>
      {listItems.map((items, index) => {
        return (
          <button
            className={css.page_button}
            key={index}
            onClick={() => CurrentPage(items)}
          >
            {items}
          </button>
        );
      })}
    </ul>
  );
}
