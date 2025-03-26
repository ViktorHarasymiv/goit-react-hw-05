import React, { useState } from "react";

import Skeleton from "@mui/material/Skeleton";

import { format } from "date-fns";

import { CgEditFlipH } from "react-icons/cg";
import { FaRegStar } from "react-icons/fa";
import { FaRegStarHalf } from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";

import css from "./Item.module.css";

export default function Item({ item }) {
  const IMAGE_SRC = `https://image.tmdb.org/t/p/w500/${item.poster_path}`;

  const formatDate = (date) => {
    if (!date || isNaN(new Date(date))) {
      return "Unknown date";
    }
    return format(new Date(date), "MMMM dd yyyy");
  };

  const rating = Number(item.vote_average).toFixed(2);
  return (
    <div className={css.flip_card}>
      <div className={css.flip_card_inner}>
        <div className={css.flip_card_front}>
          {item.poster_path ? (
            <img className={css.flip_image} src={IMAGE_SRC} alt="" />
          ) : (
            <Skeleton
              sx={{ bgcolor: " .900" }}
              variant="rectangular"
              width="100%"
              height="100%"
            />
          )}
        </div>
        <div className={css.flip_card_back}>
          <h3 className={css.title}>{item.original_title}</h3>
          <p className={css.about}>{item.overview}</p>
          <div className={css.info}>
            <span className={css.release}>
              {" "}
              <MdOutlineAccessTime
                style={{
                  fill: "orange",
                  fontSize: "16px",
                  marginRight: "5px",
                }}
              />
              {formatDate(item.release_date)}
            </span>
            <span className={css.rating}>
              {rating > 5 ? (
                <FaRegStar
                  style={{
                    fill: "orange",
                    fontSize: "16px",
                    marginRight: "5px",
                  }}
                />
              ) : (
                <FaRegStarHalf
                  style={{
                    fill: "orange",
                    fontSize: "16px",
                    marginRight: "5px",
                  }}
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
  );
}
