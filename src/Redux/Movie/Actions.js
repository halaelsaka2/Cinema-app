import * as types from "../types";
import MovieService from "../../API/Movie";

function getPopularMoviesSuccess(data) {
  return { type: types.GET_POPULAR_MOVIES, data };
}

function getNowPlayingMoviesSuccess(data) {
  return { type: types.GET_NOW_PLAYING_MOVIES, data };
}
function getTopRatedMoviesSuccess(data) {
  return { type: types.GET_TOP_RATED_MOVIES, data };
}
function getMoviesBySearchSuccess(data) {
  return { type: types.GET_MOVIES_BY_SEARCH, data };
}
function getVideosByMovieIdSuccess(data) {
  return { type: types.GET_VIDEOS_MOVIE_ID, data };
}
export function getPopularMovies(page) {
  return async function (dispatch) {
    const moviesData = await MovieService.getPopularMovies(page);
    dispatch(getPopularMoviesSuccess(moviesData.data));
  };
}

export function getTopRatedMovies(page) {
  return async function (dispatch) {
    const moviesData = await MovieService.getTopRatedMovies(page);
    dispatch(getTopRatedMoviesSuccess(moviesData.data));
  };
}

export function getNowPlayingMovies(page) {
  return async function (dispatch) {
    const moviesData = await MovieService.getNowPlayingMovies(page);
    dispatch(getNowPlayingMoviesSuccess(moviesData.data));
  };
}

export function getMoviesBySearch(keyword, page) {
  return async function (dispatch) {
    const moviesData = await MovieService.getMoviesBySearch(keyword, page);
    dispatch(getMoviesBySearchSuccess(moviesData.data));
  };
}
export function getVideosByMovieId(id) {
  return async function (dispatch) {
    const moviesData = await MovieService.getVideosByMovieId(id);
    dispatch(getVideosByMovieIdSuccess(moviesData.data));
  };
}

export function saveSearchKeyword(keyword) {
  return { type: types.SAVE_SEARCH_KEYWORD, data: keyword };
}
