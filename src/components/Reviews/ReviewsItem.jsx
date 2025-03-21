import React from "react";

import css from "./Reviews.module.css";

import { format } from "date-fns";

export default function ReviewsItem({
  dataReviews: { author, content, created_at },
}) {
  const formatDate = (date) => {
    return format(new Date(date), "MMMM dd yyyy HH:mm:ss");
  };
  return (
    <>
      <div className={css.author_tile}>
        <span className={css.review_author}>{author}</span>
        <span className={css.review_data}>{formatDate(created_at)}</span>
      </div>
      <p className={css.review_content}>{content}</p>
    </>
  );
}
