import axios from "axios";

export const imagePath = "https://image.tmdb.org/t/p/w500";
export const imagePathOriginal = "https://image.tmdb.org/t/p/original";

// const baseUrl = "https://api.themoviedb.org/3";
// const apiKey = process.env.NEXT_PUBLIC_API_KEY;
/**setup axios */
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common[
  "Authorization"
] = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNDczZmI3ZGVkYjNjZGE3YTI3NzEzNDgzY2ExOTM2NSIsIm5iZiI6MTcyMTg0NjA1OC40NjYwMzUsInN1YiI6IjY2YTE0ODAxNDlmZWM3NDIyNjgwY2QxYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qg8te5TBH6U4yl9iIRBfgZkCcWv_6qYZi1RkNOGGziU`;

// TRENDING
export const fetchTrending = async (timeWindow = "day") => {
  const { data } = await axios.get(`/trending/all/day`);
  console.log(data?.results)
  return data?.results;
};

// export const fetchScroll = async (endpoint) => {
//   const res = await axios.get(endpoint);
//   // console.log(res?.data)
//   return res?.data?.results;
// };

// MOVIES & SERIES - Details
export const fetchDetails = async (type, id) => {
  const res = await axios.get(`/${type}/${id}`);
  // console.log(res?.data);
  return res?.data;
};
export const fetchNames = async (type, id) => {
  const res = await axios.get(`/${type}/${id}`);
  return res?.data;
};

// MOVIES & SERIES - Credits
export const fetchCredits = async (type, id) => {
  const res = await axios.get(`/${type}/${id}/credits`);
  // console.log(res?.data.crew[0]?.name)
  return res?.data;
};
export const fetchdirector = async (type, id) => {
  const res = await axios.get(`/${type}/${id}/credits`);
  // console.log(res?.data.crew[0]?.name)
  return res?.data.crew[0]?.name;
};

// MOVIES & SERIES - Videos
export const fetchVideos = async (type, id) => {
  const res = await axios.get(`/${type}/${id}/videos`);
  return res?.data;
};

// DISCOVER Movies
export const fetchMovies = async (page, sortBy) => {
  const res = await axios.get(
    `/discover/movie?&page=${page}&sort_by=${sortBy}`
  );
  return res?.data;
};

// Discover Tv Series
// export const fetchTvSeries = async (page, sortBy) => {
//   const res = await axios.get(
//     `${baseUrl}/discover/tv?api_key=${apiKey}&page=${page}&sort_by=${sortBy}`
//   );
//   return res?.data;
// };

// // SEARCH
// export const searchData = async (query, page) => {
//   const res = await axios.get(
//     `${baseUrl}/search/multi?api_key=${apiKey}&query=${query}&page=${page}`
//   );
//   return res?.data;
// };
