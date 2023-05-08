import React from "react";
import { movies } from "../data";

function Movies() {
  return (
  <div>
    <h1>Movies Page</h1>
    {movies.map((movie)=>(
    <div>
      {movie.title}
         {movie.time} 
      <ul>
          <li>{movie.genres}</li>
      </ul>
    </div>))}
  </div>
)}

export default Movies;