import React, { useContext } from "react";
import SelectedContext from "../../contexts/SelectedContext";

const selectedStyle = {
  borderRadius: "20px",
  boxShadow: "0 0 1rem crimson",
  cursor: "pointer",
};

function ThemeItem({ theme }) {
  const { selected, setSelected } = useContext(SelectedContext);
  const handleSelect = () => {
    setSelected((previousValues) => ({
      ...previousValues,
      theme: theme.title,
    }));
    console.log(theme.title);
    document
      .getElementById("choose-genre")
      .scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="theme-item">
      <h4>{theme.title}</h4>
      <img
        src={theme.img}
        width="85%"
        alt="theme"
        onClick={handleSelect}
        style={selected.theme === theme.title ? selectedStyle : {}}
      />
    </div>
  );
}

export default ThemeItem;
