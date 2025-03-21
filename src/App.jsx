import { useState, useEffect, CSSProperties, Suspense, lazy } from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import SyncLoader from "react-spinners/SyncLoader";
import css from "./App.module.css";

import "./swiper.css";

const AppBar = lazy(() => import("./components/Navigation/Navigation"));

const Home = lazy(() => import("./pages/Home"));
const Movies = lazy(() => import("./pages/Movies"));
const Cast = lazy(() => import("./components/Cast/Cast"));
const Reviews = lazy(() => import("./components/Reviews/Reviews"));

import NotFound from "./pages/NotFound";
import Details from "./pages/Details/Details";

// API

import { fetchTrendingMovies } from "./movieApi";

const override = {
  display: "block",

  position: "fixed",
  top: "50%",
  left: "50%",
  transfotm: "translate(-50%, -50%)",
};

function App() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  const [popular, setPopular] = useState([]);
  const [loader, setLoader] = useState(false);

  const handelSearch = async () => {
    try {
      setLoader(true);
      setPopular([]);
      const POPULAR_DATA = await fetchTrendingMovies();
      setPopular(POPULAR_DATA);
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    handelSearch();
  }, []);

  return (
    <>
      <Suspense
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
        <AppBar></AppBar>
        <Routes>
          <Route
            path="/"
            element={<Home popular_data={popular} loader={loader} />}
          />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<Details />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
