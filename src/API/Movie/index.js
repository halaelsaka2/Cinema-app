import axios from "axios";

const getPopularMovies = async (page) => {
  return await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=a54bd452007b5135b6e98aed05131979&language=en-US&page=${page}`
  );
};
const getTopRatedMovies = async (page) => {
  return await axios.get(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=a54bd452007b5135b6e98aed05131979&language=en-US&page=${page}`
  );
};
const getNowPlayingMovies = async (page) => {
  return await axios.get(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=a54bd452007b5135b6e98aed05131979&language=en-US&page=${page}`
  );
};

const getMoviesBySearch = async (keyword, page) => {
  return await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=a54bd452007b5135b6e98aed05131979&query=${keyword}&page=${page}`
  );
};

const getVideosByMovieId = async (id) => {
  return await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=a54bd452007b5135b6e98aed05131979&language=en-US`
  );
};
const obj = { getVideosByMovieId, getPopularMovies, getTopRatedMovies, getNowPlayingMovies, getMoviesBySearch };
export default obj;
