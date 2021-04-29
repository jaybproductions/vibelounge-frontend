import "./css/App.css";
import { useState } from "react";
import Home from "./pages/Home";
import SelectedContext from "./contexts/SelectedContext";

function App() {
  const [selected, setSelected] = useState({
    theme: "",
    genre: "",
  });
  return (
    <div className="App">
      <SelectedContext.Provider value={{ selected, setSelected }}>
        <Home />
      </SelectedContext.Provider>
    </div>
  );
}

export default App;
