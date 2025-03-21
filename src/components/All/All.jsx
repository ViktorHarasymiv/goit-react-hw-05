import React, { useState, useEffect } from "react";

import { fetchAllMovies } from "./../../movieApi";

import css from "./All.module.css";
import toast from "react-hot-toast";

import List from "./List/List";
import Pagination from "../Movie/Pagination/Pagination";

export default function All() {
  const [dataAll, setDataAll] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  // useEffect(() => {
  //   const handelSearch = async () => {
  //     try {
  //       setDataAll([]);
  //       const ALL_DATA = await fetchAllMovies();
  //       setDataAll(ALL_DATA);
  //       setTotalPages(ALL_DATA.total_pages);
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //     }
  //   };
  //   handelSearch();
  // }, []);

  useEffect(() => {
    const NextPage = async (page) => {
      setDataAll([]);
      try {
        const response = await fetchAllMovies(page);

        setDataAll(response.results);
        setTotalPages(response.total_pages);

        if (!response.total_results) {
          toast(
            "Sorry, we have not found the films for your request. Try to write it differently.",
            {
              duration: 5000,
            }
          );
        } else if (currentPage > 1) {
          toast(`${currentPage} / ${totalPages}`, {
            icon: "🗒️",
            style: {
              borderRadius: "10px",
              background: "#333",
              border: "1px solid #c8006d",
              color: "#fff",
              fontWeight: "700",
              letterSpacing: ".1em",
            },
          });
        }
      } catch (error) {
        console.log(error);
      } finally {
      }
    };
    NextPage(currentPage);
  }, [currentPage]);

  const handleCheckPage = (index) => {
    setCurrentPage(index);
  };

  return (
    <div className={css.all_tile}>
      <List films={dataAll} />
      <Pagination totalPage={totalPages} next={handleCheckPage} />
    </div>
  );
}
