import * as types from "../types";
import initialState from "../initialState";

export default function MovieReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_POPULAR_MOVIES:
      return {
        ...state,
        popularMovies: action.data.results,
        countOfPopularMovies: action.data.total_results,
        totalPagesOfPopularMovies: action.data.total_pages,
      };

    case types.GET_TOP_RATED_MOVIES:
      return {
        ...state,
        topRatedMovies: action.data.results,
        countOfTopRatedMovies: action.data.total_results,
        totalPagesOfTopRatedMovies: action.data.total_pages,
      };

    case types.GET_MOVIES_BY_SEARCH:
      return {
        ...state,
        moviesBySearch: action.data.results,
        countOfMoviesBySearch: action.data.total_results,
        totalPagesOfMoviesBySearch: action.data.total_pages,
      };

    case types.SAVE_SEARCH_KEYWORD:
      return {
        ...state,
        searchKeyword: action.data,
      };
    case types.GET_VIDEOS_MOVIE_ID:
      let trailerVideos = action.data.results.filter((video) => video.type === "Trailer");
      let key = null;
      if (trailerVideos.length > 0) {
        key = action.data.results.filter((video) => video.type === "Trailer")[0].key;
      }
      return {
        ...state,
        videosByMovieId: action.data.results,
        keyTrailer: key,
      };
    default:
      return state;
  }
}
