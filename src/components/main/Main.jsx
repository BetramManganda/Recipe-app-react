import React from "react";
import Search_section from "../search_section/search_section";
import "./Main.scss";
import Hero from "../hero/hero";
import Recipe_section from "../recipe/Recipe_section";

export default function Main() {
  return (
    <div className="main">
      <Search_section />
      <Hero />
      <div className="recipe_container">
        <Recipe_section />
      </div>
    </div>
  );
}
