import React, { useContext } from "react";
import SelectedContext from "../../contexts/SelectedContext";
function GenreItem({ genre }) {
  const { selected, setSelected } = useContext(SelectedContext);

  const handleSelect = () => {
    setSelected((previousValues) => ({
      ...previousValues,
      genre: genre,
    }));

    document
      .getElementById("start-playing")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="genre">
      <h5 onClick={handleSelect}>{genre}</h5>
    </div>
  );
}

export default GenreItem;
