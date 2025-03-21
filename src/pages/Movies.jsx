import React from "react";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

import css from "./../components/Movie/Movie.module.css";
import toast, { Toaster } from "react-hot-toast";

import { CiFilter } from "react-icons/ci";

import Search from "../components/Search/Search";
import Movie from "../components/Movie/Movie";

import { fetchSearch } from "./../movieApi";

import Pagination from "../components/Movie/Pagination/Pagination";
import Accost from "../components/Movie/Accost/Accost";

export default function Movies() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const [currentPage, setCurrentPage] = useState(1);

  const [totalResult, setTotalResult] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const searchQuery = searchParams.get("search");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setSearchResults([]);

    const searchData = async (query, page) => {
      try {
        setLoading(true);

        const response = await fetchSearch(query, page);
        setSearchResults(response.results);
        setTotalResult(response.total_results);
        setTotalPages(response.total_pages);

        if (!response.total_results) {
          toast(
            "Sorry, we have not found the films for your request. Try to write it differently.",
            {
              duration: 5000,
            }
          );
        } else {
          toast.success(`Wow! We found ${response.total_results} films`);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (searchQuery) {
      searchData(searchQuery, currentPage);
    }
  }, [searchQuery, currentPage]);

  const handleCheckPage = (index) => {
    setCurrentPage(index);
  };

  return (
    <main className="container">
      <section>
        <Toaster position="top-right" reverseOrder={false} toastOptions={{}} />

        <div className={css.navigation_tile}>
          <div className={css.search_tile}>
            <div className={css.animated_title}>
              <h1 className={css.affiche_first}>Movies</h1>
              <h1 className={css.affiche_second}>Movies</h1>
            </div>
            <Search onSubmit={(query) => setSearchParams({ search: query })} />
          </div>
          <div className={css.filter_tile}>
            <CiFilter className={css.filter_ico} />
            Filters
          </div>
        </div>
        {searchResults.length > 0 ? (
          <>
            {totalResult > 0 && (
              <div className={css.section_title}>
                <span style={{ display: "block", paddingTop: "5px" }}>
                  Total: {totalResult}
                </span>
              </div>
            )}
            <Movie films={searchResults} totalPage={totalPages} />
          </>
        ) : (
          <>
            <Accost />
          </>
        )}
        <Pagination totalPage={totalPages} next={handleCheckPage} />
      </section>
    </main>
  );
}
