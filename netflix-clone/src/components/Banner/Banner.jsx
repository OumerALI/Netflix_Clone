// import { useEffect, useState } from "react";
// import axios from "../../utils/axios";
// import requests from "../../utils/requests";

// const Banner = () => {
//   const [movie, setMovie] = useState({});

//   useEffect(() => {
//     (async () => {
//       try {
//         const request = await axios.get(requests.fetchNetflixOriginals);
//         setMovie(
//           request.data.results[
//             Math.floor(Math.random() * request.data.results.length)
//           ]
//         );
//       } catch (error) {
//         console.error("Error fetching trending movies:", error);
//       }
//     })();
//   }, []);

//   return (
//     <div>
//       <h1>Movies & Shows</h1>
//       <ul>
//         {Array.isArray(request.data.results) &&
//           request.data.results.map((item) => (
//             <li key={item.id}>{item.title || item.name}</li>
//           ))}
//       </ul>
//     </div>
//   );
// };

// export default Banner;

// import { useEffect, useState } from "react";
// import axios from "../../utils/axios";
// import requests from "../../utils/requests";

// const Banner = () => {
//   const [movie, setMovie] = useState({});

//   useEffect(() => {
//     (async () => {
//       try {
//         const request = await axios.get(requests.fetchNetflixOriginals);
//         setMovie(
//           request.data.results[
//             Math.floor(Math.random() * request.data.results.length)
//           ]
//         );
//       } catch (error) {
//         console.error("Error fetching trending movies:", error);
//       }
//     })();
//   }, []);

//   return (
//     <div>
//       <h1>Movies & Shows</h1>
//       <ul>{movie && <li key={movie.id}>{movie.title || movie.name}</li>}</ul>
//     </div>
//   );
// };

// export default Banner;

import { useEffect, useState } from "react";
import axios from "../../utils/axios";
import requests from "../../utils/requests";
import "./Banner.css";

const Banner = () => {
  const [movie, setMovies] = useState({});

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const request = await axios.get(requests.fetchNetflixOriginals);
  //       console.log(request);
  //       setMovies(request.data.results);
  //     } catch (error) {
  //       console.error("Error fetching trending movies:", error);
  //     }
  //   })();
  // }, []);

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        setMovies(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no repeat",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button play"> play</button>
          <button className="banner_button"> My List</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner_fadeButtom" />
    </div>
  );
};

export default Banner;
