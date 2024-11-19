import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
export default instance;

// import axios from "axios";

// const instance = axios.create({
//   baseURL: "https://api.themoviedb.org/3",
// });

// export const fetchNetflixOriginals = () =>
//   instance.get(`/discover/tv?api_key=${API_KEY}&with_networks=213`);
