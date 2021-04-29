import React from "react";
import ChooseGenre from "../components/choose-genre/ChooseGenre";
import ChooseTheme from "../components/choose-theme/ChooseTheme";
import StartPlaying from "../components/StartPlaying";
import "../css/Home.css";

function Home() {
  return (
    <div className="home">
      <h1>Welcome to the Vibe Lounge</h1>
      <ChooseTheme />
      <ChooseGenre />
      <StartPlaying />
    </div>
  );
}

export default Home;
