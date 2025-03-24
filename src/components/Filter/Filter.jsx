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
    setFilter(event.target.value);
    setFilm(event.target.value);
    setPage(1);
    if (film == "upcoming") {
      setFilm(film);
      return;
    }
    if (film == "top_rated") {
      setFilm(film);
      return;
    }
    if (film == "trending") {
      setFilm(film);
      return;
    }
    if (film == "now_playing") {
      setFilm(film);
      return;
    }
  };

  return (
    <div className={css.filter_form}>
      <FormControl
        className={css.filter_tile}
        variant="standard"
        sx={{ minWidth: 150 }}
      >
        <InputLabel id="demo-simple-select-standard-label">
          <span className={css.filter_tile}>
            <CiFilter className={css.filter_ico} />
            Filters
          </span>
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={film}
          onChange={handleChange}
          label="Filters"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"popular"}>Popular</MenuItem>
          <MenuItem value={"top_rated"}>Top Rated</MenuItem>
          <MenuItem value={"now_playing"}>Now Playing</MenuItem>
          <MenuItem value={"upcoming"}>Upcoming</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
