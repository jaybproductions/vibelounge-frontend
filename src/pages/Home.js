import React, { useContext, useEffect } from "react";
import ChooseGenre from "../components/choose-genre/ChooseGenre";
import ChooseTheme from "../components/choose-theme/ChooseTheme";
import StartPlaying from "../components/StartPlaying";
import "../css/Home.css";
import SelectedContext from "../contexts/SelectedContext";
import { useParams } from "react-router-dom";

function Home() {
  const { selected, setSelected } = useContext(SelectedContext);
  const windowUrl = window.location.search;
  const params = new URLSearchParams(windowUrl);

  useEffect(() => {
    if (params.has("code")) {
      const code = params.get("code");
      setSelected((previousValues) => ({
        ...previousValues,
        spotifyCode: code,
      }));
    } else return;
  }, []);
  return (
    <div className="home">
      <h1>Welcome to the Vibe Lounge</h1>
      <input placeholder="enter room code or create a new room" />
      <ChooseTheme />
      <ChooseGenre />
      <StartPlaying />
    </div>
  );
}

export default Home;
