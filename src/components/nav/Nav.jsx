import React from "react";
import "./Nav.scss";

export default function Nav({ children }) {
  return (
    <div className="nav">
      <a href="#">Recipes</a>
      <a href="#">Collection</a>
    </div>
  );
}
