import React from "react";
import ThemeItem from "./ThemeItem";
import rainyGif from "../../images/rainy-gif.gif";
import coffeeShop from "../../images/coffee-shop.gif";
import desert from "../../images/desert.gif";
import forest from "../../images/forest.gif";
import fire from "../../images/fire.gif";
import cozy from "../../images/cozy.gif";

const temp = [
  { title: "Rainy", img: rainyGif },
  { title: "Desert", img: desert },
  { title: "Forest", img: forest },
  { title: "Coffee Shop", img: coffeeShop },
  { title: "By The Fire", img: fire },
  { title: "Cozy", img: cozy },
  /*{ title: "At the Airport", img: rainyGif },
  { title: "Jazz Club", img: rainyGif },
  { title: "Bluesy", img: rainyGif },*/
];
function ThemeList() {
  return (
    <div className="theme-list">
      {temp.map((item, index) => {
        return <ThemeItem theme={item} key={index} />;
      })}
    </div>
  );
}

export default ThemeList;
