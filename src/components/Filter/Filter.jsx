import React, { useState } from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import css from "./Filter.module.css";

import { CiFilter } from "react-icons/ci";

export default function Filter({ setFilter, setPage }) {
  const [film, setFilm] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;

    setFilm(value);
    setFilter(value);
    setPage(1);
    if (value == "upcoming") {
      setFilm(value);
    }
    if (value == "top_rated") {
      setFilm(value);
    }
    if (value == "trending") {
      setFilm(value);
    }
    if (value == "now_playing") {
      setFilm(value);
    }
  };

  return (
    <div className={css.filter_form}>
      <FormControl
        className={css.filter_tile}
        variant="standard"
        sx={{ minWidth: 150 }}
      >
        <InputLabel id="label_filter">
          <span className={css.filter_tile}>
            <CiFilter className={css.filter_ico} />
            Filters
          </span>
        </InputLabel>
        <Select
          labelId="label_filter"
          id="demo-simple-select-standard"
          onChange={handleChange}
          value={film}
          label="Filters"
          className="select_filter"
        >
          <MenuItem value={"popular"}>Popular</MenuItem>
          <MenuItem value={"top_rated"}>Top Rated</MenuItem>
          <MenuItem value={"now_playing"}>Now Playing</MenuItem>
          <MenuItem value={"upcoming"}>Upcoming</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
