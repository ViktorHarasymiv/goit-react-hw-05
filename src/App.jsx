import { useState, useEffect, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

// import SyncLoader from "react-spinners/SyncLoader";

import "./swiper.css";

import AppBar from "./components/Navigation/Navigation";
import Home from "./pages/Home";
import Movies from "./pages/Movies";

const Cast = lazy(() => import("./components/Cast/Cast"));
const Reviews = lazy(() => import("./components/Reviews/Reviews"));

import NotFound from "./pages/NotFound";
import Details from "./pages/Details/Details";

// API

import { fetchTrendingMovies } from "./movieApi";

// const override = {
//   display: "block",

//   position: "fixed",
//   top: "50%",
//   left: "50%",
//   transfotm: "translate(-50%, -50%)",
// };

function App() {
  let [loading, setLoading] = useState(false);
  const [popular, setPopular] = useState([]);

  const handelSearch = async () => {
    try {
      setLoading(true);
      setPopular([]);
      const POPULAR_DATA = await fetchTrendingMovies();
      setPopular(POPULAR_DATA);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handelSearch();
  }, []);

  return (
    <>
      {/* <Suspense
        fallback={
          <SyncLoader
            color={color}
            loading={loading}
            cssOverride={override}
            size={8}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        }
      > 
          </Suspense>
      */}

      <AppBar />

      <Routes>
        <Route
          path="/"
          element={<Home popular_data={popular} loading={loading} />}
        />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<Details />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
