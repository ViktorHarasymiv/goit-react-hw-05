import React, { useState } from "react";

import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

import { format } from "date-fns";

import { CgEditFlipH } from "react-icons/cg";
import { FaRegStar } from "react-icons/fa";
import { FaRegStarHalf } from "react-icons/fa";

import css from "./Item.module.css";

export default function Item({ loading, item }) {
  const IMAGE_SRC = `https://image.tmdb.org/t/p/w500/${item.poster_path}`;

  const formatDate = (date) => {
    if (!date || isNaN(new Date(date))) {
      return "Unknown date";
    }
    return format(new Date(date), "MMMM dd yyyy");
  };

  const rating = Number(item.vote_average).toFixed(2);
  return (
    <>
      {!loading ? (
        <div className={css.flip_card}>
          <div className={css.flip_card_inner}>
            <div className={css.flip_card_front}>
              {item.poster_path ? (
                <img className={css.flip_image} src={IMAGE_SRC} alt="" />
              ) : (
                <Skeleton variant="rectangular" width={210} height={118} />
              )}
            </div>
            <div className={css.flip_card_back}>
              <h3 className={css.title}>
                {item.title ? item.title : item.original_name}
              </h3>
              <p className={css.about}>{item.overview}</p>
              <div className={css.info}>
                <span className={css.release}>
                  {formatDate(
                    item.release_date ? item.release_date : item.first_air_date
                  )}
                </span>
                <span className={css.rating}>
                  {rating > 5 ? (
                    <FaRegStar style={{ fill: "orange", fontSize: "14px" }} />
                  ) : (
                    <FaRegStarHalf
                      style={{ fill: "orange", fontSize: "14px" }}
                    />
                  )}
                  <span>{rating}</span>
                </span>
              </div>
            </div>
            <div className={css.flip_box}>
              <CgEditFlipH className={css.flip_icon} />
            </div>
          </div>
        </div>
      ) : (
        <Skeleton
          sx={{ bgcolor: " .900" }}
          variant="rectangular"
          width={200}
          height={200}
        />
      )}
    </>
  );
}
