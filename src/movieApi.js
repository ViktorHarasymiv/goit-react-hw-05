import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/";

const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZTFmNjllZTRjZWNmOTFjMWNkOGY3ODAzNzZiZjU1NCIsIm5iZiI6MTc0MTkwODEyMS4wNjksInN1YiI6IjY3ZDM2ODk5ZmFjMTYzMGMyNjAyNmVkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t2fmtDgkZ89rHqB8C9WF7BzzKCAVoizYCSm4sAxq8zo";

export const fetchTrendingMovies = async () => {
  const url = `https://api.themoviedb.org/3/trending/movie/day?language=en-US`;
  const params = {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  };
  try {
    const response = await axios.get(url, params);

    return response.data.results;
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchDetails = async (id, codeWord = "") => {
  const url = `https://api.themoviedb.org/3/movie/${id}${codeWord}?language=en-US`;
  const params = {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  };
  try {
    const response = await axios.get(url, params);

    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchSearch = async (query, page = 1) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`;
  const params = {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  };
  try {
    const respons = await axios.get(url, params);
    return respons.data;
  } catch (error) {
    console.log(error.message);
  }
};

/* ALL MOVIES  API  */

export const fetchAllMovies = async (page = 1) => {
  const url = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}`;
  const params = {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  };
  try {
    const respons = await axios.get(url, params);
    return respons.data;
  } catch (error) {
    console.log(error.message);
  }
};

/* FILTERS MOVIES  API  */

export const fetchFilters = async (filter, page) => {
  const url = `https://api.themoviedb.org/3/movie/${filter}?language=en-US&page=${page}`;
  const params = {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  };
  try {
    const respons = await axios.get(url, params);
    return respons.data;
  } catch (error) {
    console.log(error.message);
  }
};
