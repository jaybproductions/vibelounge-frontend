import React, { useContext } from "react";
import SelectedContext from "../../contexts/SelectedContext";
import GenreList from "./GenreList";
function ChooseGenre() {
  const { selected, setSelected } = useContext(SelectedContext);
  return (
    <div className="choose-genre" id="choose-genre">
      {selected.theme && (
        <>
          <h4>Step 2 - Choose a Genre</h4> <GenreList />
        </>
      )}
    </div>
  );
}

export default ChooseGenre;
