import React, { useContext } from "react";
import SelectedContext from "../contexts/SelectedContext";

function StartPlaying() {
  const { selected, setSelected } = useContext(SelectedContext);
  return (
    <div className="start-playing">
      {selected.theme && selected.genre && (
        <>
          Step 3 - Play <br />
          <br />
          <div className="selections" id="selections">
            Looks Like you've selected {selected.theme} and {selected.genre}
          </div>
          Press Play to start playing
        </>
      )}
    </div>
  );
}

export default StartPlaying;
