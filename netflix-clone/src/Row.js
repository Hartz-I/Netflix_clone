import React, { useState, useEffect } from "react"; //rfce
import axios from "./axios"; //as instance was default other name means the same thing

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  //A snippet of code which runs based on a specefic condition/variable

  useEffect(() => {
    //if [], run once when the row loads, and don't run again
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // creates this https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}%with_network=213
      console.log(request);
      return request;
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>{title}</h2>

      {/* {container->posters} */}
    </div>
  );
}

export default Row;
