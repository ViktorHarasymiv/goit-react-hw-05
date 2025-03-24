import React from "react";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

import css from "./../components/Movie/Movie.module.css";
import toast, { Toaster } from "react-hot-toast";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import Search from "../components/Search/Search";
import Movie from "../components/Movie/Movie";

import { fetchSearch } from "./../movieApi";
import { fetchFilters } from "./../movieApi";

import Accost from "../components/Movie/Accost/Accost";
import Filter from "../components/Filter/Filter";

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
        } else if (currentPage > 1) {
          toast(`${currentPage} / ${totalPages}`, {
            icon: "🗒️",
            style: {
              borderRadius: "10px",
              background: "#333",
              border: "1px solid #c8006d",
              color: "#fff",
              fontWeight: "300",
              letterSpacing: ".1em",
            },
          });
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

  function CurrentPage(num) {
    setCurrentPage(num);
  }

  // FILTER

  const [filter, setFilter] = useState("upcoming");

  const [dataAll, setDataAll] = useState([]);

  const [totalFilterPages, setTotalFilterPages] = useState(0);
  const [currentFilterPage, setCurrentFilterPage] = useState(1);

  useEffect(() => {
    setDataAll([]);
    const filterFunction = async (query, page) => {
      try {
        const response = await fetchFilters(query, page);
        setDataAll(response.results);
        setTotalFilterPages(response.total_pages);

        if (!response.total_results) {
          toast(
            "Sorry, we have not found the films for your request. Try to write it differently.",
            {
              duration: 5000,
            }
          );
        } else if (currentFilterPage > 1) {
          toast(`${currentFilterPage} / ${totalFilterPages}`, {
            icon: "🗒️",
            style: {
              borderRadius: "10px",
              background: "#333",
              border: ".5px solid #c8006d",
              color: "#fff",
              fontWeight: "300",
              letterSpacing: ".1em",
            },
          });
        }
      } catch (error) {
        console.log(error);
      } finally {
      }
    };
    filterFunction(filter, currentFilterPage);
  }, [filter, currentFilterPage]);

  const handleCheckPage = (index) => {
    setCurrentFilterPage(index);
  };

  return (
    <main>
      <section>
        <Toaster position="top-right" reverseOrder={false} toastOptions={{}} />
        <div className="container">
          <div className={css.navigation_tile}>
            <div className={css.search_tile}>
              <div className={css.animated_title}>
                <h1 className={css.affiche_first}>Movies</h1>
                <h1 className={css.affiche_second}>Movies</h1>
              </div>
              <Search
                onSubmit={(query) => setSearchParams({ search: query })}
              />
            </div>
          </div>

          <div className={css.accost_tile}>
            Welcome to our service
            <span className={css.accost_title}>The Movie DB</span>
            <p className={css.accost_paragraph}>
              We have for you collection with {filter}
            </p>
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
            <Movie
              loading={loading}
              films={searchResults}
              totalPage={totalPages}
            />
            <div className="pagination">
              <Stack spacing={2}>
                <Pagination
                  count={totalPages}
                  page={currentPage}
                  onChange={(_, num) => CurrentPage(num)}
                  variant="outlined"
                  color="secondary"
                />
                1
              </Stack>
            </div>
          </>
        ) : (
          <>
            <Filter setFilter={setFilter} setPage={setCurrentFilterPage} />
            <Accost
              loading={loading}
              data={dataAll}
              totalPage={totalFilterPages}
              nextPage={handleCheckPage}
              currentFilter={filter}
              setPage={setCurrentFilterPage}
              currentPage={currentFilterPage}
            />
          </>
        )}
      </section>
    </main>
  );
}
