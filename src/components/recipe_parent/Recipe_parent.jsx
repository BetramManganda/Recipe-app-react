import React from "react";
import "./Recipe_parent.scss";

export default function Recipe_parent(props) {
  return (
    <div className="recipe_parent">
      <img src={props.image} width="190px" alt="" />
      <h2>{props.title}</h2>
      <p>{props.author}</p>
    </div>
  );
}
