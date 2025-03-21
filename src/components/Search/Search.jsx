import React from "react";

import css from "./Search.module.css";

import { IoIosSearch } from "react-icons/io";

export default function Search({ onSubmit }) {
  const handleSearch = (evt) => {
    evt.preventDefault();

    const form = evt.target;

    const SEARCH_VALUE = form.elements.SEARCH_VALUE.value.trim();

    onSubmit(SEARCH_VALUE);

    form.reset();
  };

  return (
    <form onSubmit={handleSearch} className={css.search}>
      <div className={css.search_tile}>
        <IoIosSearch className={css.icons_search} />
        <input
          type="search"
          name="SEARCH_VALUE"
          placeholder="Search"
          className={css.search_input}
          required
        />
      </div>
      <button className={css.search_button}>GO</button>
    </form>
  );
}
