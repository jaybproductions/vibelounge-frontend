import React from "react";
import GenreItem from "./GenreItem";

const genres = ["rock", "rap", "metal", "blues", "lo-fi"];
function GenreList() {
  return (
    <div className="genre-list" id="genre-list">
      {genres.map((item, index) => {
        return <GenreItem genre={item} key={index} />;
      })}
    </div>
  );
}

export default GenreList;
