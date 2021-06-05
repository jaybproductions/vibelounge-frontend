import "./css/App.css";
import { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Lounge from "./pages/Lounge";
import SelectedContext from "./contexts/SelectedContext";
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  const [selected, setSelected] = useState({
    theme: "",
    genre: "",
    spotifyCode: "",
  });
  return (
    <div className="App">
      <SelectedContext.Provider value={{ selected, setSelected }}>
        <Switch>
          <Redirect exact from="/" to="/home" />

          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/lounge/:loungeCode" component={Lounge} />
        </Switch>
      </SelectedContext.Provider>
    </div>
  );
}

export default App;
